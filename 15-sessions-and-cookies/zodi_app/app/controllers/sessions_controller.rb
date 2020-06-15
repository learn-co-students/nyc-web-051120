class SessionsController < ApplicationController
  def page_view_reset
    session[:view_count] = 0 

    # redirect_to sing_path(sign)
    redirect_back fallback_location: signs_path
  end 
 
end
