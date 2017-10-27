class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)
    @video.author_id = current_user.id

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = Video.find(params[:id])

    if @video.update(description: params[:description], title: params[:title])
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def delete
    @video = Video.find(params[:id])

    @video.destroy
    render json: @video.id
  end

  private

  def video_params
    params.require(:video).permit(:description, :title, :video)
  end
end
