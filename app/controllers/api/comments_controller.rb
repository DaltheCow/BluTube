class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comment.all.includes(:author)
  end

  def create
    @comment = current_user.comments.new(comment: params[:comment][:body])

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment.destroy
      render json: @comment.id
    else
      render json: ["something went wrong"]
    end

  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update(comment: params[:comment][:body])
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

end
