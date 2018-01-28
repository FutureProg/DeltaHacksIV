# Bike Share

## Inspiration

As students in the local Hamilton area, we frequently use bikes to get around to school, the grocery store, even downtown. SOBI provides a critical service for anyone who wants to take advantage of cheap, worry-free transportation.

## What it does

Bike Share provides an easy to use interface for Android and iOS to plan your trip by finding nearby bikes or hubs, providing directions and even a price estimate.

## How we built it

We built the serverless backend using stdlib and the SOBI API for querying hub and bike locations, and bike availibility. 
The app was built in React Native which allows for cross platform development for both Android and iOS.
The location services, maps, directions and route information were all done using the Google Maps API.

## Challenges we ran into

We would have liked to have live access to the SOBI API using javascript, but the library was only provided in python.

## What we learned

We learned how simple backends can be using stdlib, how to work with the Google Maps and SOBI api, and making fluid mobile apps in React Native.

## Future Directions

In the future, we would like to connect to the SOBI API directly instead of working with a snapshot to have live up to the minute data on current bike locations to provide the best possible user experience. Also, implementing the charge right into the mobile app.
