require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  # INDEX Method
  get '/doctors' do
    @doctors = Doctor.all 

    erb :index
  end
  
  # NEW Action/Method
  get '/doctors/new' do
   erb :new
  end

  # CREATE Action/Method
  post '/doctors' do
    doctor = Doctor.create(params)
 
    redirect to "/doctors/#{doctor.id}"
  end

  get '/doctors/:id/edit' do
    @doctor = Doctor.find(params[:id])
    erb :edit
  end

  # UPDATE Action/Method
  patch '/doctors/:id' do 
    @doctor = Doctor.find(params[:id])
    @doctor.update(params[:doctor])

    redirect to "/doctors/#{@doctor.id}"
  end 

  # SHOW Action/Method
  get '/doctors/:id' do
    @doctor = Doctor.find(params[:id])

    erb :show
  end

  delete '/doctors/:id' do
    @doctor = Doctor.find(params[:id])
    @doctor.destroy

    redirect to '/doctors'
  end

  


end
