Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :subscriptions, only: [:create]
      resources :videos, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :username_sessions, only: [:create]
    resources :videos, except: [:new, :edit] do
      resources :likes, only: [:create, :update]
      resources :comments, except: [:edit, :new, :destroy]
    end
    resources :likes, only: [:destroy]
    resources :comments, only: [:destroy]
    resources :subscriptions, only: [:destroy, :index]
  end

  namespace :api do
    get 'search/:query', to: 'search#index'
  end


  root "static_pages#root"
end
