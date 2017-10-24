Rails.application.routes.draw do

  get 'sessions/create'

  get 'sessions/delete'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
