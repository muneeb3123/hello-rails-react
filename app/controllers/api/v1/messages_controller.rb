class Api::V1::MessagesController < ApplicationController
  def random
    random_message = Message.order("RANDOM()").first
    render json: { Greeting: random_message&.text}
  end
end
