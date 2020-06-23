console.log("Events")

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

// add listener to jaws upvote button and increment the score by 1

// * √get the up-vote button for Jaws
// * √add a click listener
// * modify the DOM to increment the score

const jawsUpVote = document.querySelector(".up-vote")
jawsUpVote.addEventListener("click", function(e){
  const button = e.target
  const scoreSpan = button.parentNode.querySelector("span")
  scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
})



const goonieLi = createMovieLi(goonies)
renderMovie(goonieLi)