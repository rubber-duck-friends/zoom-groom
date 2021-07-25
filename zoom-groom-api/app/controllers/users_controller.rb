class UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        if @user.save
            auth_token = Knock::AuthToken.new payload: {sub: @user.id}
            render json: {email: @user.email, jwt: auth_token.token}, status: :created
        else 
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def sign_in
        @user = User.find_by_email(params[:email])

        if @user && @user.authenticate(params[:password])
            auth_token = Knock::AuthToken.new payload: {sub: @user.id}, status: 200
        else
            render json: {error: "Incorrect email or password"}, status: 404
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :phone_number, :is_staff, :password, :password_confirmation)
    end
end
