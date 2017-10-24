class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      username: params[:user][:username],
      username: params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid password/username"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Not signed in"], status: 404
    end

end
