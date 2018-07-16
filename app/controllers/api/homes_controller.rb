class Api::HomesController < ApplicationController
  def index
    @homes = Home.all
    render :index
  end

  def show
    home_id = params['id'].to_i
    @home = Home.find(home_id)
  end

  def create

  end

  def update

  end

  def destroy

  end
end
