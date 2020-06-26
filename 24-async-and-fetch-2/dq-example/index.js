/*
Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

√1. put a click listener on the button
√2. on click, do a fetch request to the endpoint to get user data
3. when the data is returned from the server, render that data to the DOM

*/

document.addEventListener("DOMContentLoaded", e => {
  const clickHandler = () => {
    const button = document.querySelector("button")
    button.addEventListener("click", e => {
      getUser()
    })
  }

  const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0]
      renderUser(user)
    })
  }
  
  const renderUser = user => {
    console.log(user)

    const title = user.name.title
    const first = user.name.first
    const last = user.name.last
    const fullname = `${title} ${first} ${last}`

    document.querySelector('#fullname').textContent = fullname

    const email = user.email

    document.querySelector('#email').textContent = email

    const profile_picture = user.picture.large

    document.querySelector('#profile_picture').src = profile_picture
  }
  
  clickHandler()
})