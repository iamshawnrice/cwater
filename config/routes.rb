Rails.application.routes.draw do
  get 'buy/index'

  root 'home#index'
  get 'sales/' => 'sales#index'
end
