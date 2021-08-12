class Dog < ApplicationRecord
  belongs_to :user
  validates_presence_of :name
  validates_presence_of :birthday
  validates_presence_of :breed
  validates_presence_of :size
end
