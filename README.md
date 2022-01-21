# Coding Challenge

We have provided a few partially completed components and files:

- components/App.js
- components/StationTable.js
- components/StationDetailsCard.js
- api/api.js

Using those components and files as a starting point, please implement the following functionality:

- Using the [NCDC's Climate Data Online (CDO) API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2#gettingStarted) to retrieve the first 10 weather stations in North Carolina, US (hint: locationid: ‘FIPS:37’) in order by name.
- From that dataset, implement a table component, where the columns are the ID and the station name, and each row is a station.
- For each row, implement the functionality where on clicking on the row, it displays the StationDetailsCard component below the table that lists the latitude, longitude, and elevation (with units).
- In the StationDetailsCard component, implement the Close button functionality that removes the card from view.

## Running the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Resources

- Here is the official documentation for the NCDC's Climate Data Online (CDO) API: https://www.ncdc.noaa.gov/cdo-web/webservices/v2#gettingStarted
- You are welcome to install any npm packages you deem neccessary or helpful in completing the challenge.
- You are welcome to use online resources or tools you would usually use during your day to day development process (Official documentation, Postman, etc)
