Rails.application.routes.draw do
  get 'buy/index'

  get 'buy/confirm'

  get 'buy/index'

  root 'home#index'
  get 'sales/' => 'sales#index'
end
