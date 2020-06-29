class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.title }.reverse
    render json: movies
  end

  def update
    movie = Movie.find(params[:id])

    movie.update!(movie_params)

    render json: movie
  end

  def destroy
    movie = Movie.find(params[:id])

    movie.destroy!

    render json: {}
  end
  
  private

  def movie_params
    params.require(:movie).permit(:score, :title, :imageUrl, :year, :genre)
  end
end
