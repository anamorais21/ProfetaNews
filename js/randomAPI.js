const RANDOM_API_URL =
  'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
const maxResults = 5

const fetchRandomUser = () => {
  fetch(`${RANDOM_API_URL}&results=${maxResults}`) // na outra rota funciona
    .then((response) => response.json())
    .then((results) => {
      console.log('randomUser', results)

      const list = document.querySelector('#fill_list')

      results.splice(0, maxResults).map((result) => {
        const { first, last, email, address, created, balance } = result
        const li = document.createElement('li')

        li.setAttribute('userId', created)
        li.innerHTML = `<b>Nome: </b>${first} ${last} <b>Email: </b>${email} `
        list.appendChild(li)
      })
    })
}
window.onload = fetchRandomUser()

const fetchRandomUser2 = () => {
  fetch(`${RANDOM_API_URL}&results=${maxResults}`) // na outra rota funciona
    .then((response) => response.json())
    .then((results) => {
      console.log('randomUser', results)

      const list = document.querySelector('#fill_list2')

      results.splice(0, maxResults).map((result) => {
        const { first, last, email, address, created, balance } = result
        const li = document.createElement('li')

        li.setAttribute('userId', created)
        li.innerHTML = `<br><b>Nome: </b>${first} ${last} <b>Email: </b>${email}<br><b>Endereço:</b> ${address}`
        list.appendChild(li)
      })
    })
}
