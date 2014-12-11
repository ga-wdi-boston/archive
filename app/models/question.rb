class Question < ActiveRecord::Base
  belongs_to :correct_answer
  belongs_to :objective
  belongs_to :assessment
end
