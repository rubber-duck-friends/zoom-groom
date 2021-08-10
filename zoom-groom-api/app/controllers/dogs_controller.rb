class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :update, :destroy]

  # GET /dogs
  def index
    @dogs = Dog.all

    render json: @dogs
  end

  # GET /dogs/1
  def show
    render json: @dog
  end

  def show_dog_by_user
    @dogs = Dog.where(user_id: params[:id])
    render json: @dogs
  end

  # POST /dogs
  def create
    @dog = logged_in_user.dogs.new(dog_params)

    if @dog.save
      render json: @dog, status: :created, location: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dogs/1
  def update
    if @dog.update(dog_params)
      render json: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dogs/1
  def destroy
    @dog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dog_params
      params.require(:dog).permit(:name, :age, :sex, :fixed_status, :breed, :size, :groomer_notes, :user_id)
    end
end
