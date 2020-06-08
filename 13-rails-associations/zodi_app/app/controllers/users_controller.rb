class UsersController < ApplicationController
  def new 
    @user = User.new

    @signs = Sign.all
  end 

  def create 
    user = User.create(user_params) 

    # redirect_to user_path(user)
    # redirect_to sign_path(params[:user][:sign_id])
    redirect_to sign_path(user.sign_id)
  end 

  private 

  def user_params
    params.require(:user).permit(:name, :age, :birthday, :img_url, :sign_id)
  end 



end
