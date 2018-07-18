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

    if @home.save
      attach_generic_house(@home);
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def attach_generic_house(home)
    unless home.photos.attached?
      file = EzDownload.open('http://www.redheadscafe.com/images/icons/home.png')
      home.photos.attach(io: file, filename: 'home.png')
    # else
    #   home_photos[:photos].each do |photo|
    #     @home.photos.attach(photo)
    #   end
    end
  end

  def update
    @home = Home.find(params[:id])

    if @home.update(home_params)
      attach_generic_house(@home);
      render :shoe
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def destroy
    home = Home.find(params[:id])
    home.update({ sale: false, rent: false })
  end

  def home_params
    params.require(:home).permit(:address, :latitude, :longitude, :beds, :baths, :price, :sale, :rent, :owner_id, photos: [])
  end

  def home_photos
    params.require(:home).permit()
  end
end
