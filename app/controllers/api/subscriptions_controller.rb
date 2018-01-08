class Api::SubscriptionsController < ApplicationController
  def create
    @sub = Subscription.new

    @sub.subscriber_id = current_user.id
    @sub.subscribee_id = params[:user_id]
    if @sub.save
      render :show
    else
      render json: @sub.errors.full_messages, status: 422
    end
  end

  def index
    @user = current_user
    render :index
  end

  def destroy
    @sub = current_user.subscriptions.find(params[:id])
    @sub.destroy
    render :show
  end
end
