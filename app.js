const domain = 'https://api.openbrewerydb.org/breweries'



//To get the info from the search
const input = document.querySelector(`#blank`)//keyword input box
const submit = document.querySelector(`#search`)// keyword submit button
const inputCity = document.querySelector(`#city-search`)//city input box
const inputState = document.querySelector(`#state-search`)//state input box
const cityStateSubmit = document.querySelector(`#submit`)//city & state submit button

submit.addEventListener('click', async ()=>{
    
    let userInput = input.value
    const response = await axios.get(`${domain}/search?query=${userInput}&per_page=25`)
    console.log(response)
    clearList()
    renderList(response.data)
})

cityStateSubmit.addEventListener('click', async ()=>{

    let city = inputCity.value
    let state = inputState.value
    const response = await axios.get(`${domain}?by_state=${state}&by_city=${city}&per_page=25`)
    console.log(response)
    clearList()
    renderList(response.data)
})

const displayBrew = document.querySelector(".brewery-list")

const renderList = breweries =>{
    console.log(breweries)
    breweries.forEach(brewery => {
        const brewList = document.createElement('div')
        brewList.className = 'brew-list'

        // gets and appends the name of the brewery
        const brewName = document.createElement('h3')
        brewName.innerHTML = `Name: ${brewery.name}`
        brewList.appendChild(brewName)
        console.log(brewName)

        //gets and appends the State where the brewery is located
        const brewState = document.createElement('p')
        brewState.innerHTML = `State: ${brewery.state}`
        brewList.appendChild(brewState)
        console.log(brewState)

        //get and appends the city where the brewery is located
        const brewCity  = document.createElement('p')
        brewCity.innerHTML = `City: ${brewery.city}`
        brewList.appendChild(brewCity)
        console.log(brewCity)
    
        //get and appends the street where the brewery is located
        const brewStreet  = document.createElement('p')
        brewStreet.innerHTML = `Street: ${brewery.street}`
        brewList.appendChild(brewStreet)
        console.log(brewStreet)

        //get and appends the phone number of the brewery 
        const brewPhone  = document.createElement('p')
        brewPhone.innerHTML = `Phone Number: ${brewery.phone}`
        brewList.appendChild(brewPhone)
        console.log(brewPhone)


        //get and appends the Website of the brewery 
        const brewWeb  = document.createElement('p')
        brewWeb.innerHTML = `WebSite: ${brewery.website_url}`
        brewList.appendChild(brewWeb)
        console.log(brewWeb)
        console.log(brewList)



        displayBrew.append(brewList)
    });

}

function clearList() {
    // write code here
    const clearElement = document.querySelector('.brewery-list')
    while(clearElement.lastChild){
      clearElement.removeChild(clearElement.lastChild)
    }}
