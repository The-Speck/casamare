class Api::SavesController < ApplicationController
  def create
    @save = Save.new(home_id: params[:home_id])
    @save.user_id = current_user.id

    if @save.save
      render json: { message: 'Successful Save' }
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = Save.find_by(user_id: current_user.id, home_id: params[:id])
    @save.try(:destroy)
    render json: { message: 'Successfully processed' }
  end

end
