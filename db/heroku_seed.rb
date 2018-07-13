users = []

100.times do |i|
  first = (0...5).map { ('a'..'z').to_a[rand(26)] }.join
  second = (0...3).map { ('a'..'z').to_a[rand(26)] }.join
  third = (0...3).map { ('a'..'z').to_a[rand(26)] }.join

  user = User.new
  user.email = "#{first}@#{second}.#{third}"
  user.password = first + second + third
  redo unless user.valid?
  users << user
  user.save;
end

200.times do |i|
  address_num = rand(9999)
  address_street = (0...5).map { ('a'..'z').to_a[rand(26)] }.join
  address_city = (0...5).map { ('a'..'z').to_a[rand(26)] }.join
  address_state = (0...5).map { ('a'..'z').to_a[rand(26)] }.join
  address_postal = ""
  5.times { address_postal << rand(10).to_s }

  home = Home.new

  address = "#{address_num} #{address_street}"
  city = address_city
  state = address_state
  postal_code = address_postal
  home.address = [address, city, state, postal_code].join(', ')

  home.latitude = rand * 90 + rand * -90
  home.longitude = rand * 180 + rand * -180

  home.beds = rand(5) + 1
  home.baths = rand(3) + 1
  home.price = rand(1_500_000) + 100_000

  home.sale = [true, false].sample
  home.rent = [true, false].sample

  home.owner_id = users.sample.id

  redo unless home.valid?
  home.save
end
