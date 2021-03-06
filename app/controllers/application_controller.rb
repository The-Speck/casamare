class ApplicationController < ActionController::Base

  helper_method :current_user, :require_logged_in, :logged_in?, :saved_homes

  def login(user)
    return nil if session[:session_token]
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def saved_homes
    Save.where(user_id: current_user.id)
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Invalid Email or Password'] }, status: 401
    end
  end
end
