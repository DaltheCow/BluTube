class Api::LikesController < ApplicationController
  def create
    @user = current_user
    @like = current_user.likes.new(like_value: params[:like][:like_value])
    @like.video_id = params[:video_id]
    if @like.save
      render 'api/users/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @like = current_user.likes.find_by(video_id: params[:video_id])
    debugger
    if @like.update(like_value: (params[:like][:like_value] == 'true'))
      render 'api/users/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like.id
  end

end
