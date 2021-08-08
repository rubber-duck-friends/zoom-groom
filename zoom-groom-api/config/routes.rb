Rails.application.routes.draw do
  resources :dogs
  resources :appointments
  scope '/auth' do
    post 'sign_up', to: 'users#create'
    post 'sign_in', to: 'users#sign_in'
    get 'sign_in', to: 'users#token_authenticate'
  end
  get '/user/:id', to: 'users#view'
  put '/users/:id', to: 'users#update'
end
