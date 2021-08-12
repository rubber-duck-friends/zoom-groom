require 'rails_helper'

RSpec.describe Dog, type: :model do

  before(:example) do
    @user = User.create(id: 1, first_name: "Hello", last_name: "World", phone_number: "043895945", email: "test@test.com", password_digest: "qi3eroiqhfrou")
  end

  it "is valid with valid attributes" do
    expect(Dog.new(user_id: 1, name: "Thomas", birthday: "2020-07-14", sex: "M", fixed_status: true, breed: "Kettle", size: "XS")).to be_valid
  end
  it "is not valid without a name" do
    dog = Dog.new(user_id: 1, name: nil, birthday: "2020-07-14", sex: "M", fixed_status: true, breed: "Kettle", size: "XS")
    expect(dog).to_not be_valid
  end
  it "is not valid without an age" do
    dog = Dog.new(user_id: 1, name: "Thomas", birthday: nil, sex: "M", fixed_status: true, breed: "Kettle", size: "XS")
    expect(dog).to_not be_valid
  end
  it "is not valid without a breed" do
    dog = Dog.new(user_id: 1, name: "Thomas", birthday: "2020-07-14", sex: "M", fixed_status: true, breed: nil, size: "XS")
    expect(dog).to_not be_valid
  end
it "is not valid without a size" do
  dog = Dog.new(user_id: 1, name: "Thomas", birthday: "2020-07-14", sex: "M", fixed_status: true, breed: "Kettle", size: nil)
  expect(dog).to_not be_valid
end

end