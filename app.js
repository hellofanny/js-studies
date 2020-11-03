
const fetchDoggies = () => {

  const url = `https://api.thedogapi.com/v1/images/search?limit=20&page=10`

  fetch(url)
    .then(response => response.json())
    .then(doggies => {
      console.log(doggies)

      const doggieListItems = doggies.reduce((accumulator, dog) => {
        dogItem = {
          url: dog.url,
          name: "Undefined 👀",
          group: "",
          temperament: "",
        }

        if(dog.breeds?.length) {
          dogItem.name = dog.breeds[0].name
          dogItem.group = dog.breeds[0].breed_group
          dogItem.temperament = dog.breeds[0].temperament
        }
             
        accumulator += `
          <li class="card">
            <div class="card-image">
              <img class="image" src="${dogItem.url}"> 
            </div>
            <h2 class="card-title">${dogItem.name}</h2>
            <p>${dogItem.group}</p>
            <p>${dogItem.temperament}</p>
          </li>`
              
          return accumulator
      }, '')

      const ul = document.querySelector('[data-js="doggies-data"]')
      ul.innerHTML = doggieListItems
      console.log(doggieListItems)
    })
}

fetchDoggies()
