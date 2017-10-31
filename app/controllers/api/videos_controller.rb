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
    update_info = params[:video] ? {description: params[:video][:description], title: params[:video][:title]} : {view_count: @video.view_count + 1}

    if @video.update(update_info)
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
