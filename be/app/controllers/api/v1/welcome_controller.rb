class Api::V1::WelcomeController < ApplicationController
  def show
    message = Message.all.sample.text
    welcome_message = {
      data: {
        type: 'message',
        id: nil,
        attributes: {
          body: message
        }
      }
    }
    # response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
    render json: welcome_message
  end
end
