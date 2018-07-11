class Api::SessionsController < ApplicationController
  def create
    email = user_params[:email]
    password = user_params[:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Invalid email/password'], status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
