class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]

  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "User creation failed with those parameters. Please try again."}, status: 422
    end
  end

  def sign_in
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}, status: 200
    else
      render json: {error: "Invalid username or password"}, status: 404
    end
  end

  def token_authenticate
    token = request.header["Authenticate"]
    @user = User.find(decode(token)["user_id"])

    render json: @user
  end

  def auto_login
    render json: @user
  end

  def view
    @user = User.where(id: params[:id]) 
    render json: @user
  end

  # PATCH/PUT /users/:id
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user_params, status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :phone_number, :is_staff, :password, :password_confirmation)
  end
end
