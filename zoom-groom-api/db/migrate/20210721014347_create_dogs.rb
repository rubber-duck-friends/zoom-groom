class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.date :birthday
      t.string :sex
      t.bool :fixed_status
      t.string :breed
      t.string :size
      t.string :groomer_notes

      t.timestamps
    end
  end
end
