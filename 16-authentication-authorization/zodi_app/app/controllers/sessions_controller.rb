class SessionsController < ApplicationController
  skip_before_action :auth_user, only: [:new, :create]

  def page_view_reset
    session[:view_count] = 0 

    # redirect_to sing_path(sign)
    redirect_back fallback_location: signs_path
  end 

  def logout
    # session[:id] = nil 
    session.delete(:user_id)
  end 

  def new 
  end 

  def create 
    user = User.find_by(name: params[:session][:name])

    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id

      redirect_to signs_path
    else
      flash[:error] = "Username or Password is Incorrect"
      redirect_to new_login_path
    end  
  end 
 
end
