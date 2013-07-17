class Event < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  before_validation :smart_add_url_protocol
  validates :name, :street, :city, :state, :starts_at, :ends_at, :presence => true

  has_many :attendees
  has_many :users, :through => :attendees
  belongs_to :event_type

  belongs_to :created_by, :class_name => "User"


  def smart_add_url_protocol
    unless self.url.blank? || self.url[/^http:\/\//] || self.url[/^https:\/\//]
      self.url = 'http://' + self.url
    end
  end

  def event_type_name

    # this is here to keep older events without types
    # from blowing the map up

    if self.event_type
      return self.event_type.name
    else
      return "other"
    end
  end

  def to_s
    self.name
  end

  def address
    [self.street, self.street2, self.city, self.state, self.country].compact.join(', ')
  end

  def mappable?
    !self.latitude.blank? and !self.longitude.blank?
  end

  def calendar_name
    "#{self.name} - #{self.city}, #{self.state}"
  end

  def prose_date
    if !self.ends_at.blank? and self.starts_at.to_date != self.ends_at.to_date
      return "#{self.starts_at.to_date.to_s(:long)} - #{self.ends_at.to_date.to_s(:long)}"
    else
      return self.starts_at.to_date.to_s(:long)
    end
  end

  def major_convention_disabled?
    self.major_convention == true and !self.major_convention_approved.blank?
  end

  def going?(user)
    self.users.include?(user)
  end

  def map_content
    "<a href='/events/#{self.id}>#{self.name}</a><br />#{self.city}, #{self.state}<br />#{self.event_type}"
  end

end
