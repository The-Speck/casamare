Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :saves, only: [:create, :destroy]
    resources :homes
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
