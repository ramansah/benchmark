class WelcomeController < ApplicationController
  
  def index
  end
  
  def person
        @user = Hash["name" => "Raman Sah", "age" => 22]
        render json: @user
  end

end
