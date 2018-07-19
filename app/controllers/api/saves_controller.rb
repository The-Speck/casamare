class Api::SavesController < ApplicationController
  def create
    save = Save.new(home_id: params[:home_id])
    save.user_id = current_user.id

    if save.save
      @saves = saved_homes
      @user = currentUser
      render '/api/users/show'
    else
      render json: save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = Save.find_by(user_id: current_user.id, home_id: params[:id])
    @user = currentUser

    if @save.try(:destroy)
      @saves = @save.where(user_id: current_user.id)
      render '/api/users/show'
    else
      render json: { message: 'No destroy' }
    end
  end

end
