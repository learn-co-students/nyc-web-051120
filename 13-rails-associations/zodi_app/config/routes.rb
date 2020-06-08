Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, only: [:new, :create]
  resources :signs #, only: [:index, :show, :new, :create, :edit, :update]

  # get '/signs', to: "signs#index", as: "signs"
  # get '/signs/new', to: "signs#new", as: "new_sign"
  # get '/signs/:id', to: "signs#show", as: "sign"
  # post '/signs', to: "signs#create"
  # get '/signs/:id/edit', to: "signs#edit", as: "edit_sign"

end



