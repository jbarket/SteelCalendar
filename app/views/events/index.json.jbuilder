json.array! @events do |event|
  json.id event.id
  json.title event.calendar_name
  json.start event.try(:starts_at).try(:to_date)
  json.end event.try(:ends_at).try(:to_date)
  json.url "/events/#{event.id}"
end
