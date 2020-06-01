require 'sinatra'
require 'pry'

get '/users' do 
  "<h1>hi</h1>"
end 

get '/users/:id' do 
  binding.pry
end 