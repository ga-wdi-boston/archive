class AddForeignKeyConstraints < ActiveRecord::Migration
  def change
    add_foreign_key :topics, :subjects
    add_foreign_key :objectives, :topics
    add_foreign_key :objectives, :assessments
    add_foreign_key :assessments, :users
    add_foreign_key :assessments, :topics
    add_foreign_key :questions, :objectives
    add_foreign_key :questions, :assessments
    add_foreign_key :answers, :questions
    add_foreign_key :submissions, :answers
    add_foreign_key :submissions, :users
    add_foreign_key :materials, :objectives
  end
end
