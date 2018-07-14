photos = home.photos.to_a.map{ |photo| url_for(photo) }


json.extract! home, :id, :address, :latitude, :longitude, :beds, :baths, :price, :sale, :rent, :owner_id
json.photos photos
