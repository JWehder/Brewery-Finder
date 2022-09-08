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

// DOM Manipulators

// create elements for card
function createBrewCard(breweryObj) {
    // create a card with name, address, website, and phone number to append to the site
    const breweryCollection = document.querySelector('#brewery-collection');
    const div = document.createElement('div')
    div.className = 'card';
    const name = document.createElement('h3');
    const phoneNumber = document.createElement('p')
    const address = document.createElement('p')
    const website = document.createElement('a')
    const saveButton = document.createElement('button')

    // create text Content for each element
    name.textContent = breweryObj.name;
    phoneNumber.textContent = `Phone Number: ${breweryObj.phoneNumber}`;
    address.textContent = `Address: ${breweryObj.street}, ${breweryObj.city}, ${breweryObj.state}` + ` ${breweryObj.zip}`
    website.textContent = breweryObj.website;
    saveButton.textContent = "Save Brewery!";
    
    // make the website a hyperlink
    website.href = breweryObj.website

    //append to page
    breweryCollection.append(div)
    div.append(name, phoneNumber, address, website, saveButton)

}

// Supplementary Functions

function createBreweryObj(brewery) {
    // instantiates a brewery object
    const breweryObj = {
        name: brewery.name,
        phoneNumber: brewery.phone,
        street: brewery.street,
        city: brewery.city,
        state: brewery.state,
        zip: brewery.postal_code,
        website: brewery.website_url
    }
    // uses the object as a parameter in the createBrewCard function
    createBrewCard(breweryObj)
}

// Server Requests

// get default values from open brewery DB
function getBreweries() {
    fetch(`https://api.openbrewerydb.org/breweries`)
        .then(resp => resp.json())
        .then(breweries => breweries.forEach(brewery => createBreweryObj(brewery)))
        // append values to page
}

// search for brewery based on query from search bar value
function searchForBrewery(brewery) {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`)
        .then(resp => resp.json())
        .then(breweries => {
            removeBreweriesOnPage()
            breweries.forEach(brewery => createBreweryObj(brewery))
        })
}

