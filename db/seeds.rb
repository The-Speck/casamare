# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "json"
file = File.read "./storage/addresses-us-all.json"
images = File.read "./storage/image_url.txt"
urls = images.split("\n")

data = JSON.parse(file)

User.destroy_all
Home.destroy_all

User.create(email: 'test@test.com', password: 'password')
User.create(email: 'Guest@test.com', password: 'password')

puts 'Starting seed'

ActiveRecord::Base.transaction do
  puts 'Begin Users'
  users = []

  10.times do |i|
    puts i
    user = User.new
    user.email = Faker::Internet.email
    user.password = Faker::Internet.password(6)
    redo unless user.valid?
    users << user
    user.save;
  end

  puts 'Finished Users'
  puts 'Begin Homes'

  #max 3220
  30.times do |i|
    puts i
    home = Home.new
    sampled_home = data['addresses'][rand(3221)]

    address = sampled_home['address1']
    city = sampled_home['city']
    state = sampled_home['state']
    postal_code = sampled_home['postalCode']
    home.address = [address, city, state, postal_code].join(', ')

    home.latitude = sampled_home['coordinates']['lat']
    home.longitude = sampled_home['coordinates']['lng']

    home.beds = rand(5) + 1
    home.baths = rand(3) + 1
    home.price = rand(1_500_000) + 100_000

    home.sale = [true, false].sample
    home.rent = [true, false].sample

    home.owner_id = users.sample.id

    redo unless home.valid?
    puts 'uploading image'

    image_num = (rand(241) + 1).to_s.rjust(3, '0');
    file = EzDownload.open("https://s3.amazonaws.com/casamare-dev/Main+House+Images/calhouse_0#{image_num}.jpg")
    filename = "calhouse_0#{image_num}.jpg"

    home.photos.attach(io: file, filename: filename)

    sleep(2)

    home.save
  end

  puts 'Finished homes'
end
