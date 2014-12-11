class CreateAssessments < ActiveRecord::Migration
  def change
    create_table :assessments do |t|
      t.text :name
      t.text :description
      t.belongs_to :user, index: true
      t.belongs_to :topic, index: true

      t.timestamps null: false
    end
    add_foreign_key :assessments, :users
    add_foreign_key :assessments, :topics
  end
end
