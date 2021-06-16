Rails.application.routes.draw do
  
  # namespace :api do
  #   namespace :v1 do
  #     get 'planner_function/index'
  #     get 'planner_function/create'
  #     get 'planner_function/show'
  #     get 'planner_function/destroy'
  #   end
  # end
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :primogems, :only => [:index, :show, :create, :destroy]
      resources :calendars, :only => [:index, :show, :create, :destroy]
    end
  end
  get '/' => 'planners#home'
  get '/planner' => 'planners#planner'
  get '/calendar' => 'planners#calendar'
  get '/map' => 'planners#map'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
