class Api::HomesController < ApplicationController
  def index
    @homes = Home.all
    render :index
  end

  def show

  end

  def create

  end

  def update

  end

  def destroy

  end
end
