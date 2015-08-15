Rails.application.routes.draw do
  root 'home#index'
  get 'sales/' => 'sales#index'
end
