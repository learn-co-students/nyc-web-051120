class UsersController < ApplicationController
  def new 
    @user = User.new

    @signs = Sign.all
  end 

  def create 
    user = User.create(user_params)
    # user = User.new(user_params)

    # if user.save
    if user.valid? 
     redirect_to sign_path(user.sign_id)
    else
      flash[:user_errors] = user.errors.full_messages

      redirect_to new_user_path 
    end 

  end 

  private 

  def user_params
    params.require(:user).permit(:name, :age, :birthday, :img_url, :sign_id)
  end 



end
