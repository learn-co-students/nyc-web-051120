console.log("Delegating just means getting someone else to do the work you don't want to do...")

/*-----------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(e){
  // const jawsUpVote = document.querySelector(".up-vote")
  // jawsUpVote.addEventListener("click", function(e){
  //   const button = e.target
  //   const scoreSpan = button.parentNode.querySelector("span")
  //   scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
  // })

  // get all the up-vote buttons from the page
  // add click listeners to each one to increment the score

  const movieList = document.getElementById('movie-list')
  
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
    movieList.append(movieLi)
  }
  
  function clickeHandler(){
    // const upVoteButtons = document.getElementsByClassName('up-vote')
    // const upVoteButtonsArray = Array.from(upVoteButtons)
  
    // upVoteButtonsArray.forEach(function(upVoteButton){
    //   upVoteButton.addEventListener("click", function(e){
    //     const button = e.target
    //     const scoreSpan = button.parentNode.querySelector("span")
    //     scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
    //   })
    // })

    movieList.addEventListener("click", function(e){
      // if the e.target is an up-vote button, then increment the score for that movie
      
      if(e.target.className === 'up-vote'){
        console.log('up votes')
        const button = e.target
        const scoreSpan = button.parentNode.querySelector("span")
        scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
      } else if(e.target.textContent === "×"){
        console.log("DELETE")
        const movieLi = e.target.parentNode
        movieLi.remove()
      }
    })
  }
  
  const goonieLi = createMovieLi(goonies)
  clickeHandler()
  renderMovie(goonieLi)
})

// As a user, when I click a delete button for a movie, I want that movie to be removed from the web page.

// √use existing event delegation to listen to delete clicks
// on click, remove the li from the dom



