json.extract! user, :id, :email

json.savedHomes([])

if saves
  json.savedHomes saves.map{ |save| save.home_id }
else
  json.savedHomes []
end
