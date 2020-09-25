//Api being used
const domain = 'https://api.openbrewerydb.org/breweries'



//To get the info from the search
const input = document.querySelector(`#blank`)//keyword input box
const submit = document.querySelector(`#search`)// keyword submit button
const inputCity = document.querySelector(`#city-search`)//city input box
const inputState = document.querySelector(`#state-search`)//state input box
const cityStateSubmit = document.querySelector(`#submit`)//city & state submit button


//Submit event for keywords and/or names of brewery
submit.addEventListener('click', async ()=>{
    
    let userInput = input.value
    const response = await axios.get(`${domain}/search?query=${userInput}&per_page=25`)
    clearList()
    renderList(response.data)
})

//Submit event for the city and state
cityStateSubmit.addEventListener('click', async ()=>{
    clearList()

    let city = inputCity.value
    let state = inputState.value
    const response = await axios.get(`${domain}?by_state=${state}&by_city=${city}&per_page=25`)
    renderList(response.data)
})

const displayBrew = document.querySelector(".brewery-list")

//Function to render the list of breweries and their data
const renderList = breweries =>{
    breweries.forEach(brewery => {
        const brewList = document.createElement('div')
        brewList.className = 'brew-list'

        // gets and appends the name of the brewery
        const brewName = document.createElement('h3')
        brewName.innerHTML = `Name: ${brewery.name}`
        brewList.appendChild(brewName)

        //gets and appends the State where the brewery is located
        const brewState = document.createElement('p')
        brewState.innerHTML = `State: ${brewery.state}`
        brewList.appendChild(brewState)

        //get and appends the city where the brewery is located
        const brewCity  = document.createElement('p')
        brewCity.innerHTML = `City: ${brewery.city}`
        brewList.appendChild(brewCity)
    
        //get and appends the street where the brewery is located
        const brewStreet  = document.createElement('p')
        brewStreet.innerHTML = `Street: ${brewery.street}`
        brewList.appendChild(brewStreet)

        //get and appends the phone number of the brewery 
        const brewPhone  = document.createElement('p')
        brewPhone.innerHTML = `Phone Number: ${brewery.phone}`
        brewList.appendChild(brewPhone)


        //get and appends the Website of the brewery 
        const brewWeb  = document.createElement('p')
        brewWeb.innerHTML = `WebSite: ${brewery.website_url}`
        brewList.appendChild(brewWeb)


        //All the data grab is pushed to the html
        displayBrew.append(brewList)
    });

}

//Clears the list
function clearList() {
    const clearElement = document.querySelector('.brewery-list')
    while(clearElement.lastChild){
      clearElement.removeChild(clearElement.lastChild)
    }}
