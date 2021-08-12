require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    expect(User.new(id: 1, first_name: "Hello", last_name: "World", phone_number: "04389598345", email: "test@test.com", password_digest: "qi3eroiqhfrou")).to be_valid
  end
  it "is not valid without a password" do
    user = User.new(id: 1, first_name: :"Hello", last_name: "World", phone_number: "04389598345", email: "test@test.com", password_digest: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without an email" do
    user = User.new(id: 1, first_name: "Hello", last_name: "World", phone_number: "04389598345", email: nil, password_digest: "qi3eroiqhfrou")
    expect(user).to_not be_valid
  end
  it "is not valid without a phone number" do
    user = User.new(id: 1, first_name: "Hello", last_name: "World", phone_number: nil, email: "test@test.com", password_digest: "qi3eroiqhfrou")
    expect(user).to_not be_valid
  end
  it "is not valid if a user with the same email address already exists" do
    user1 = User.create(id: 1, first_name: "Hello", last_name: "World", phone_number: "8345", email: "test@test.com", password_digest: "qi3eroiqhfrou")
    user2 = User.new(id: 2, first_name: "Greetings", last_name: "Planet", phone_number: "8345", email: "test@test.com", password_digest: "qi3erowsfkbehfrou")
    expect(user2).to_not be_valid
  end
end
