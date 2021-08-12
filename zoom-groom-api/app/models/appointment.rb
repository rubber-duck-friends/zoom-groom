class Appointment < ApplicationRecord
  has_one :dog
  belongs_to :user
end
