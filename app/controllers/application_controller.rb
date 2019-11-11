class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_with_http_basic
end