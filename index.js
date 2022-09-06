
// breweries when you first open the page
// you can search for breweries that using the db's query
// shows a maximum of 4 breweries per page
// three event-listeners: submit event for search query, next page click, DOM Content Loaded
// one iterator method: forEach()

// need a GET Request for displaying breweries on page load
// need a GET Request for searching for a brewery
// event listener to submit search query
// event listener for click event on next page button
// display search button with a click on 'search for brewery'
// event listener for clicking like on a particular brewery
// DOM manipulator for displaying each brewery in a card
// displaying the hidden search bar
// removing all elements when moving to page 2
// possibly filter your selections from top rated to lowest rated


function getBreweries() {
    fetch('https://api.openbrewerydb.org/breweries')
        .then(resp => resp.json())
        .then(breweries => console.log(breweries))
}

function searchForBrewery(brewery) {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`)
        .then(resp => resp.json())
        .then(breweries => console.log(breweries))
}

searchForBrewery('austin')
getBreweries()

// search for a brewery
