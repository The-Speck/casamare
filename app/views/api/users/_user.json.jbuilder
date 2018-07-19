json.extract! current_user, :id, :email

saves = saved_homes
if logged_in? && saves
  json.savedHomes saves.map{ |save| save.home_id }
else
  json.savedHomes []
end
