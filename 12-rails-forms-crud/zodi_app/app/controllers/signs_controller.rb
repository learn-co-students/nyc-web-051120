class SignsController < ApplicationController

  def index 
    @signs = Sign.all
    # render :index
  end 

  def show 
    @sign = Sign.find(params[:id])
    render :show
  end 

  def new 
    @sign = Sign.new
  end 

  def create 
    sign = Sign.create(sign_params)

    redirect_to sign_path(sign.id) # "/sings/:id"
  end 
  
  def edit 
    @sign = Sign.find(params[:id])
  end 
  
  def update 
    sign = Sign.find(params[:id])
    sign.update(sign_params)
    
    redirect_to sign_path(sign.id) # "/sings/:id"
  end

  private 

  def sign_params
    params.require(:sign).permit(:name, :date, :element, :img_url)
  end 
end
