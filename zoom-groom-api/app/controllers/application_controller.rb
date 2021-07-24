class ApplicationController < ActionController::API
    # Makes knock and its methods available in all controllers
    include Knock::Authenticable
end
