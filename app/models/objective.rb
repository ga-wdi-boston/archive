class Objective < ActiveRecord::Base
  belongs_to :topic
  belongs_to :assessment
end
