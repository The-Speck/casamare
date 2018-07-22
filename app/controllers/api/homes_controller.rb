class Api::HomesController < ApplicationController
  def index
    homes = Home.in_bounds(params[:bounds]).with_attached_photos.sample(400)
    min = params[:minPrice].to_i
    max_temp = params[:maxPrice].to_i
    max = (max_temp == 0 ? (+1.0/0.0) : max_temp )

    @homes = homes.select do |home|
      home.price >= min &&
      home.price <= max &&
      home.beds >= params[:minBeds].to_i &&
      home.baths >= params[:minBaths].to_i &&
      ( home.sale.to_s == params[:buy] ||
        home.rent.to_s == params[:rent] )
    end

    render :index
  end

  def show
    home_id = params[:id].to_i
    @home = Home.find(home_id)
  end

  def create
    @home = Home.new(home_params);
    @home.owner_id = current_user.id

    if @home.save
      attach_generic_house(@home);
      Save.create(home_id: @home.id, user_id: current_user.id)

      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def attach_generic_house(home)
    home.photos.purge
    if home_photos.empty?
      file = EzDownload.open("https://s3.amazonaws.com/casamare-pro/home.png")
      home.photos.attach(io: file, filename: 'home.png')
    else
      home_photos[:photos].each do |photo|
        home.photos.attach(photo)
      end
    end
  end

  def update
    @home = Home.find(params[:id])
    if @home.update(home_params)
      attach_generic_house(@home);
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def destroy
    home = current_user.homes.find(params[:id])

    if home
      home.update({ sale: false, rent: false })
      render json: {message: 'House has been taken off the market'}
    else
      render json: home.errors.full_messages, status: 422
    end
  end

  def savedhomes
    ids = params[:home_ids]
    if ids
      ids = ids.map(&:to_i)
    end
    @homes = Home.where(id: ids)
    render :index
  end

  # def saved_params
  #   params.requrie(:home_).permit(home_ids: [])
  # end

  def home_params
    params.require(:home).permit(:address, :latitude, :longitude, :beds, :baths, :price, :sale, :rent)
  end

  def home_photos
    params.require(:home).permit(photos: [])
  end
end
