class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :phone_number, presence: true, uniqueness: true
end
