# CasaMare

## Summary
---
What is the difference between a house and a home? A home is yours.

CasaMare is a website to help you find your way home that is suited to your needs. You can find a home to rent or buy in all 50 states filtered by location, price, number of beds and baths. You can also post homes for sale/rent.

![Casa Mare](https://www.sweetwaterliving.com/media/4660825/hero-1448px-25fps-_optim.gif)

## Features
---
* User and Session Authentication
* Save homes
* Filter homes by location, price or amenities
* Prevention of duplicate home creation
* Validation of real addresses
* Interactive map

## The Nitty Gritty
---

Casamare consists of two main components, the splash/home page and the home index page. The splash page consists of header with three main links that redirects to the index page and either lists houses for rent/buy or opens up a component overlaying the index to sell. The header also allows for the User to sign in or sign up. If already logged in, the user settings show a saved home option and a log out option.

### Splash
![Splash](https://raw.githubusercontent.com/The-Speck/casamare/master/app/assets/images/splash.PNG)

The splash page also has an address search feature to redirect the user to the index page centered at the address with the listings of homes for that area to buy/rent depending on the option chosen. If the sell option was chosen, the address is sent through google's geocoder for corresponding latitude and longitude and again sent through the geocoder to obtain a valid, formatted address. The Sell component's form is then auto-filled with the valid address.

### Index
![Index](https://raw.githubusercontent.com/The-Speck/casamare/master/app/assets/images/index.PNG)

The index page contains a similar header that can switch between homes for sale or rent. The sell option opens up a component with a form to fill out the home information. The submit for the form only available if the address is valid and all the necessary information is filled out. Attaching an image is optional and a default image will be assigned if none are given. The index header also contains filter options for location, price range, minimum beds and baths.

### Home Show Component
![Home Show](https://raw.githubusercontent.com/The-Speck/casamare/master/app/assets/images/home_show.PNG)

### Home Sell Component
![Home Sell](https://raw.githubusercontent.com/The-Speck/casamare/master/app/assets/images/sell_home.PNG)


The index body is laid out with a map to the left and the home listing on the right. The map has markers that correspond to the listing latitude and longitude and are clickable to open the home show component. The map component grabs the boundaries of the current viewing area and filters out all homes outside the bounds. The listing features home items that show images, information and a save 'heart' button for the home. Clicking on the home item in the home listing component will also open the home show component. The home show modal contains a header with save button and edit/delete buttons if the home owner is the current user. Logged in users may also see saved homes listings.

### Saved Home Listing
![Saved Homes](https://raw.githubusercontent.com/The-Speck/casamare/master/app/assets/images/saved_homes.PNG)

### The Future
* Implement a description that users write to make the homes more personable.
* Write functionality to provide different prices for homes that are both on sale and rent.
* Add Google's address auto-complete search bar.
