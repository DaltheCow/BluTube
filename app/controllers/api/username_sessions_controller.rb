class Api::UsernameSessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    path = params[:user][:path]
    if (@user && path === '/login') || (!@user && path === '/signup')
      render json: true
    else
      if path === '/login'
        render json: ["Not a valid username"], status: 401
      elsif path === '/signup'
        render json: ["Username not available"], status: 401
      end
    end
  end
end
