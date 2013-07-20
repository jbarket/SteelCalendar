Steelcalendar::Application.routes.draw do

  devise_for :users

  match '/profile' => 'users#profile'
  match '/settings' => 'users#settings'

  resources :users do
    collection do
      get 'settings'
      get 'profile'
    end
  end

  resources :events do
    collection do
      get 'mine'
      get 'manage'
      get 'map'
      get 'stats'
    end
    member do
      get 'going'
      get 'nope'
    end
  end


  root :to => 'events#index'
end
