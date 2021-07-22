# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dogs = Dog.create(
    [
        {name: 'Fido', birthday: Date.new(2019-8-1), sex: "M", fixed_status: true, breed: "Kelpie", size: "M", groomer_notes: "n/a"}
    ]
)
