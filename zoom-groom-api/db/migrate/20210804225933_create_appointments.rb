class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.timestamp :start_time
      t.timestamp :end_time
      t.references :dog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
