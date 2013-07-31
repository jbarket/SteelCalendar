class EventsController < ApplicationController
  before_filter :authenticate_user!, :except => [:index, :show, :map]

  # GET /events
  # GET /events.json
  def index

    @events = Event.order("starts_at ASC")

    if !params[:start].blank? and !params[:end].blank?
      start_date = Date.strptime(params[:start], '%s')
      end_date = Date.strptime(params[:end], '%s')

      @events = @events.where("starts_at <= ? AND ends_at >= ?", end_date, start_date)

    end

    unless params[:distance] == "All"

      if !params[:zipcode].blank?
        @events = @events.near(params[:zipcode], params[:distance]) | @events.where(["major_convention = ? AND major_convention_approved IS NOT NULL", true])
      elsif request.location
        @events = @events.near([request.location.latitude, request.location.longitude], params[:distance]) | @events.where(["major_convention = ? AND major_convention_approved IS NOT NULL", true])
      end
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.jbuilder
    end
  end

  def map
    @events = Event.order("starts_at ASC").where("starts_at >= ? AND ends_at >= ?", Date.today, Date.today)

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.jbuilder
    end
  end


  def stats
    @events_by_starts_at = Event.count(:group => "date_trunc('month', starts_at)", :order => "date_trunc('month', starts_at) ASC")
    @events_by_created_at = Event.count(:group => "date_trunc('month', created_at)", :order => "date_trunc('month', created_at) ASC")
  end

  def mine

    @events = current_user.events.order("starts_at ASC")

    if !params[:start].blank? and !params[:end].blank?
      start_date = Date.strptime(params[:start], '%s')
      end_date = Date.strptime(params[:end], '%s')

      @events = @events.where("starts_at <= ? AND ends_at >= ?", end_date, start_date)

    end

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.jbuilder
    end

  end

  def manage

    @events = Event.where("created_by_id = ?", current_user.id).order("starts_at DESC")

    respond_to do |format|
      format.html
    end

  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    @event = Event.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  def going
    @event = Event.find(params[:id])

    unless @event.users.include?(current_user)
      a = @event.attendees.new
      a.user = current_user
      a.save!
    end

    redirect_to @event

  end

  def nope
    @event = Event.find(params[:id])

    if @event.users.include?(current_user)
      a = @event.attendees.where("user_id = ?", current_user.id).first
      a.destroy
    end

    redirect_to @event

  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(params[:event])

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render json: @event, status: :created, location: @event }
      else
        format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(params[:id])

    respond_to do |format|
      if @event.update_attributes(params[:event])
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end
end
