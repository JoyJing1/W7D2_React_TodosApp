Rails.application.routes.draw do

  namespace :api do
    resources :todos, only: [:index, :create, :show, :destroy, :update]
  end

  root("static_pages#root")
end
