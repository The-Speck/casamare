class Api::HomesController < ApplicationController
  def index
    @homes = Home.all.with_attached_photos
    render :index
  end

  def show
    home_id = params['id'].to_i
    @home = Home.find(home_id)
  end

  def create
    @home = Home.new(home_params);

    if @home.save
      if home_photos[:photos].empty?
        file = EzDownload.open('http://www.redheadscafe.com/images/icons/home.png')
        @home.photos.attach(io: file, filename: 'home.png')
      else
        home_photos[:photos].each do |photo|
          @home.photos.attach(photo)
        end
      end
      render :show
    else
      debugger
      render json: @home.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  def home_params
    params.require(:home).permit(:address, :latitude, :longitude, :beds, :baths, :price, :sale, :rent, :owner_id)
  end

  def home_photos
    params.require(:home).permit(photos: [])
  end
end
