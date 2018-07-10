Rails.application.routes.draw do

  namespace :api do
    resources :users, only: [:create, :show]
    resource :sessions, only: [:create, :destroy]
  end

end
