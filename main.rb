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
          #{@first.capitalize}, #{@last.capitalize}!"
end

# Sums two numbers from the URL
# localhost:4567/calc/add/1/2
get '/calc/add/:first/:second' do
  #passes in params as strings. Must change to integer
  @first = params[:first].to_i
  @second = params[:second].to_i
  #It wants a string to output it again
  return (@first + @second).to_s
end

#Returns the product of two numbers
# localhost:4567/calc/multiply/5/10
get '/calc/multiply/:first/:second' do
  @first = params[:first].to_i
  @second = params[:second].to_i
  return (@first * @second).to_s
end

get '/oh_hai/:name' do
  @name = params[:name]
  erb :hai
end