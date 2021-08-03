Rails.application.routes.draw do
  resources :dogs
  scope '/auth' do
    post 'sign_up', to: 'users#create'
    post 'sign_in', to: 'users#sign_in'
    get 'sign_in', to: 'users#token_authenticate'
  end
end
