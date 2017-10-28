Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :username_sessions, only: [:create]
    resources :videos, except: [:new, :edit]
  end


  root "static_pages#root"
end
