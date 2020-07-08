/* 
1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"
*/  

class Movie {
  static all = []

  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.imageUrl = movieObj.imageUrl
    this.genre = movieObj.genre
    this.score = movieObj.score
    this.node = this.createMovieLi()

    Movie.all.push(this)
  }

  prettyPrint(){
    return `Title: ${this.title}, Year: ${this.title}, Genre: ${this.genre}, Score: ${this.score}`
  }

  createMovieLi(){
    const movieLi = document.createElement('li')
    movieLi.className = "movie"
    movieLi.dataset.id = this.id
  
    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
  
    return movieLi
  }
  
  remove(){
    console.log(this.node)
    this.node.remove()
    this.removeFromCollection()
  }
  
  removeFromCollection(){
    const index = Movie.all.indexOf(this)
    if (index > -1) {
      Movie.all.splice(index, 1)
    }
  }

  increaseScore(){
    this.score++
    this.node.querySelector('span').textContent = this.score
  }
  
  render(movieList){
    movieList.prepend(this.node)
  }

  static instantiateMovies(movieCollection){
    return movieCollection.map(movieObj => {
      return new Movie(movieObj)
    })
  }

  static renderMovies(movies, movieList){
    movies.forEach(movie => {
      movie.render(movieList)
    })
  }

  static find(id){
    return this.all.find(movie => {
      return movie.id === id
    })
  }
}

// const matrix = new Movie("The Matrix", 1998, "something.com", "Science Fiction", 10000)