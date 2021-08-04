class Dog < ApplicationRecord
    has_one :owner, class_name: "User"
end
