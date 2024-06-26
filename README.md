# Food Ordering App

# Hungry Hub

## PLAN FOR THE APP ( UI Design )

- ## Header

  - Logo
  - Nav items
    - Home, About Us, Cart etc ...

- ## Body

  - Search Bar
  - Restaurant Container
    - Restaurant Card
      - Image
      - Name, Ratings etc ...

- ## Footer

  - Copyright
  - Links
  - Address and Contact Details

# Things Completed

- Used create react app and config with Tailwind CSS
- Added few google fonts for styling (poppins and ubuntu)
- Header completed ( Logo and Nav items )
- Carousel added into App ( npm i react-multi-carousel )
- CORS Plug-in added as chrome extension (CROSS-ORIGIN RESOURCE SHARING)
- Swiggy API integrated and fetched details from Swiggy
- Styled Restaurant card using Tailwind CSS
- Added Top rated Restaurants functionality to filter restaurants which have 4.0 star and above
- Shimmer effect added - For better user experience
- Added Search functionality
- Bug Fix: Should make copy of restaurant list, So that even after the initial search the functionality should work as we expected
- Bug Fix: or else it will make search only within the existing search results
- Footer added and styled properly
- Installed react-router-dom ( npm i react-router-dom )
- Added contact us and about us components
- Routing (navigation) from home page to contact us / about us and cart done
- Error component created to show if there is any error happens in App
- Created children routes - Header intact with contact us , about us and cart page
- About us and Contact us pages styled properly
- Utilized useLocator hook to render footer component based on some conditions ( Footer will not visible in RestaurantMenu components)
- Properly styled RestaurantMenu component and retrieved restaurants infos from API
- Optimized our code by using custom hooks to achieve single responsibility principle
- Added online & offline feature using custom hook
- Implemented lazy loading for cart and groceries - It helps to build large scale app and very performant
- Added higher order component for restaurantCard to show veg restaurants
- Created accordion to show completed list of restaurant dishes
- Added toggle function to show and hide accordions
- Context API added to avoid props drilling
- Installed redux and redux toolkit (RTK) ( npm i redux ) ( npm i @reduxjs/toolkit )
- Created Store => Configured with our App => Added slices into store
- Adding "Add to Cart" functionality to our app using redux store
- Done unit testing for contact us and about us page
-
