console.log("DOM Manipulation is so cool.")

// √need some data about the movie - title, year, genre, score, poster
// √create an li element for the movie and all the other HTML
// √get that thing up on the DOM somehow

const goonies = {
  title: "The Goonies",
  year: 1985,
  score: 10000,
  genre: "Adventure",
  imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_2000x.jpg?v=1586639573"
}

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
  const movieList = document.getElementById('movie-list')
  movieList.append(movieLi)
}




const goonieLi = createMovieLi(goonies)
renderMovie(goonieLi)