class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :photo, :styles => { :thumb => "50x50#" }

  has_many :attendees
  has_many :events, :through => :attendees

  def full_name
    [self.first_name, self.last_name].join(" ") || self.email
  end

  def admin?
    self.role == "Admin"
  end

end
