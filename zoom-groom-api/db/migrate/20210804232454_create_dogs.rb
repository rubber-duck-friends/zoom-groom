class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string, :name
      t.DATE, :age
      t.string, :sex
      t.boolean, :fixed_status
      t.string, :breed
      t.string, :size
      t.string :groomer_notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
