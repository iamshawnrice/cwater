Rails.application.routes.draw do
  get 'buy/index'
  get 'buy/confirm'

  get 'sales/' => 'sales#index'

  root 'home#index'
end
