class AddDogToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_reference :appointments, :dog, null: false, foreign_key: true
  end
end
