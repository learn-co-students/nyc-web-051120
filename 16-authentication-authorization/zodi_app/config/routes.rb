Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, only: [:new, :create, :show]
  resources :signs #, only: [:index, :show, :new, :create, :edit, :update]

  patch "/sessions/page_view_reset", to: 'sessions#page_view_reset', as: 'reset_session' 
  delete "/sessions/logout", to: "sessions#logout", as: "logout"
  get "/sessions/new", to: "sessions#new", as: "new_login"
  post "/sessions", to: "sessions#create", as: "login"
  # get '/signs', to: "signs#index", as: "signs"
  # get '/signs/new', to: "signs#new", as: "new_sign"
  # get '/signs/:id', to: "signs#show", as: "sign"
  # post '/signs', to: "signs#create"
  # get '/signs/:id/edit', to: "signs#edit", as: "edit_sign"

end



