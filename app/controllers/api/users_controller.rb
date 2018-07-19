class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/_user'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    owner_id = params['id'].to_i
    @user = User.find(owner_id)
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
