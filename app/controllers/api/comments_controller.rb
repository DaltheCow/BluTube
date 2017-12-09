class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comment.all.includes(:author)
  end

  def create
    @comment = current_user.comments.new(body: params[:comment][:body])
    @comment.video_id = params[:video_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: ["something went wrong"]
    end

  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update(body: params[:comment][:body])
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

end
