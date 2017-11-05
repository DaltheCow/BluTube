class Api::LikesController < ApplicationController
  def create
    @user = current_user
    @like = current_user.likes.new(like_value: params[:like][:like_value])
    @like.video_id = params[:video_id]
    if @like.save
      @video = Video.find(params[:video_id])
      render 'api/videos/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @like = current_user.likes.find_by(video_id: params[:video_id])

    if @like.update(like_value: (params[:like][:like_value] == 'true'))
      @video = Video.find(params[:video_id])
      render 'api/videos/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    if @like.destroy
      @video = Video.find(@like.video_id)
      render 'api/videos/show'
    else
      render json: ["something went wrong"]
    end
  end

end
