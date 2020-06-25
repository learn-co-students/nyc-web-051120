console.log("refactoring is fun!")

/*-----------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(e){

  // standing in for a DB
  const movies = [
    {
      title: 'The Goonies',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
      year: 1985,
      genre: 'Adventure',
      score: 100
    },
    { 
      title: 'Free Willy',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
      year: 1993,
      genre: 'Family',
      score: 0  
    },
    { 
      title: 'Top Gun',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
      year: 1986,
      genre: 'Adventure',
      score: 0  
    },
    { 
      title: 'Mean Girls',
      imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
      year: 2004,
      genre: 'Comedy',
      score: 0  
    },
    { 
      title: 'Parasite',
      imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
      year: 2019,
      genre: 'Horror',
      score: 0  
    },
    {
      title: "What About Bob?",
      year: 1991,
      genre: 'Comedy',
      score: 0,
      imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: 'Science Fiction',
      score: 0,
      imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
    },
    {
      title: "Jaws",
      year: 1984,
      genre: 'Horror',
      score: 0,
      imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
    },
  ]
  const movieList = document.getElementById('movie-list')
  
  // const goonies = {
  //   title: "The Goonies",
  //   year: 1985,
  //   score: 10000,
  //   genre: "Adventure",
  //   imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_2000x.jpg?v=1586639573"
  // }
  
  function createMovieLi(movie){
    const movieLi = document.createElement('li')
    movieLi.className = "movie"
  
    movieLi.innerHTML = `
      <h3>${movie.title}</h3>
      <img alt=""
          src="${movie.imageUrl}" />
      <h4>Year: ${movie.year}</h4>
      <h4>Genre: ${movie.genre}</h4>
      <h4>Score: <span>${movie.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
  
    return movieLi
  }
  
  function renderMovie(movieLi){
    movieList.append(movieLi)
  }
  
  function clickHandler(){
    document.addEventListener("click", function(e){
      if(e.target.matches(".up-vote")){
        const button = e.target
        const scoreSpan = button.parentNode.querySelector("span")
        scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
      } else if(e.target.textContent === "×"){
        const movieLi = e.target.parentNode
        movieLi.remove()
      } else if(e.target.matches("#show-form")){
        const button = e.target
        button.textContent = 'Hide Form'
        button.id = 'hide-form'

        const newMovieForm = document.createElement('form')
        newMovieForm.innerHTML = `
          <label>Title: </label>
          <input type="text" name="title">
          <br>
          <label>Year: </label>
          <input type="text" name="year">
          <br>
          <label>Genre: </label>
          <input type="text" name="genre">
          <br>
          <label>Image URL: </label>
          <input type="text" name="imageUrl">
          <br>
          <input type="submit" value="Add Movie">
        `

        button.insertAdjacentElement("afterend", newMovieForm)
      } else if(e.target.matches("#hide-form")){
        const button = e.target
        const newMovieForm = document.querySelector('form')
        newMovieForm.remove()

        button.textContent = 'Show Form'
        button.id = 'show-form'
      }
    })
  }
  
  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      // √get the data out of the form
      // √build an object with that data
      // √render that data to the DOM as a movie

      const form = e.target
      
      const title = form.title.value
      const genre = form.genre.value
      const year = form.year.value
      const imageUrl = form.imageUrl.value
      const score = 0

      const movieObj = {
        title: title,
        genre: genre,
        year: year,
        imageUrl: imageUrl,
        score: score
      }

      const movieLi = createMovieLi(movieObj)
      renderMovie(movieLi)
      form.reset()
    })
  }
  
  // const goonieLi = createMovieLi(goonies)
  // renderMovie(goonieLi)

  // iterate through the movies array
  // render each movie to the DOM as an li
  
  const renderMovies = movieCollection => {
    movieCollection.forEach(movieObj => {
      const movieLi = createMovieLi(movieObj)
      renderMovie(movieLi)
    })
  }
  
  renderMovies(movies)
  clickHandler()
  submitHandler()
})

/*
√As a user, when I click the "Show Form" button I want a form to appear that accepts details about a movie and the text in the button should change to "Hide Form"
  - use the existing click listener to capture clicks on the show form button
  - change the text of the button
  - create a form and render it to the DOM


√When I click "Hide Form", the form disappears and the text in the button changes back to "Show Form"

√When I click "Add Movie" (submit) the movie appears on the DOM as an li.


*/




// function sayHi(){
//   console.log("hi")
// }

// const sayHello = (name, age) => `Hello there ${name}. You're ${age}`










































// if(e.target.id === 'show-form'){
//   const button = e.target
//   const movieForm = document.createElement('form')

//   movieForm.innerHTML = `
    // <label>Title: </label>
    // <input type="text" name="title">
    // <br>
    // <label>Year: </label>
    // <input type="text" name="year">
    // <br>
    // <label>Genre: </label>
    // <input type="text" name="genre">
    // <br>
    // <label>Image URL: </label>
    // <input type="text" name="imageUrl">
    // <br>
    // <input type="submit" value="Add Movie">
//   `

//   button.insertAdjacentElement('afterend', movieForm)
//   button.textContent = 'Hide Form'
//   button.id = 'hide-form'

// } else if(e.target.id === 'hide-form'){
//   const button = e.target
//   const movieForm = document.querySelector('form')

//   movieForm.remove()
//   button.textContent = 'Show Form'
//   button.id = 'show-form'
// } 