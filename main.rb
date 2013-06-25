require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  "Hello!"
end

get '/hello_world' do
  "Hello, World!"
end

get '/hello_me' do
  @me = "David"
  return "Hello, #{@me}"
end

get '/hello_you/:name' do
  @name = params[:name]
  return "Hello, #{@name}"
end

# localhost:4567/names/david/fisher
get '/names/:first/:last' do
  @first = params[:first]
  @last = params[:last]
  return "You can do multiple parameters,
          #{@first.upcase}, #{@last}!"
end