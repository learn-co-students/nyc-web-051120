class SignsController < ApplicationController
  before_action :find_sign, only: [:show, :edit, :update, :destroy] 

  def index 
    @signs = Sign.all
    # render :index
  end 

  def show 
    if session[:view_count]
      session[:view_count] = session[:view_count] + 1 
    else 
      session[:view_count] = 1
    end 
    # @sign = Sign.find(params[:id])
    # render :show
  end 

  def new 
    @sign = Sign.new
  end 

  def create 
    sign = Sign.create(sign_params)

    redirect_to sign_path(sign.id) # "/sings/:id"
  end 
  
  def edit 
    # @sign = Sign.find(params[:id])
  end 
  
  def update 
    # @sign = Sign.find(params[:id])
    @sign.update(sign_params)
    
    redirect_to sign_path(@sign.id) # "/sings/:id"
  end

  def destroy 
    # @sign = Sign.find(params[:id])
    @sign.destroy 

    redirect_to signs_path
  end 

  private 

  def sign_params
    params.require(:sign).permit(:name, :date, :element, :img_url)
  end 

  def find_sign
    @sign = Sign.find(params[:id])
  end

end
