class UsersController < ApplicationController
  skip_before_action :auth_user, only: [:new, :create]

  def new 
    @user = User.new

    @signs = Sign.all
  end 

  def show 
    @user = User.find(params[:id])

    if @user == @current_user
      render :show 
    else
      flash[:error] = "can only view your own profile page" 
      redirect_to user_path(@current_user)
    end 
  end 

  def create 
    user = User.create(user_params)
    # user = User.new(user_params)

    # if user.save
    if user.valid? 
     session[:user_id] = user.id
     redirect_to sign_path(user.sign_id)
    else
      flash[:user_errors] = user.errors.full_messages

      redirect_to new_user_path 
    end 

  end 

  private 

  def user_params
    params.require(:user).permit(:name, :age, :birthday, :img_url, :sign_id, :password)
  end 



end
