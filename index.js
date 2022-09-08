// Event Listeners

// append breweries for page load
document.addEventListener('DOMContentLoaded', () => {
    getBreweries()
    getSavedBreweriesLength()

})

// grab value from the search form and input it into brewery query
document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault()
    searchForBrewery(e.target.query.value)
})



// Server Requests

// get default values from open brewery DB
function getBreweries() {
    fetch(`https://api.openbrewerydb.org/breweries`)
        .then(resp => resp.json())
        .then(breweries => breweries.forEach(brewery => createBreweryObj(brewery)))
        // append values to page
}



