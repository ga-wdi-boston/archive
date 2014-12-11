class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :title
      t.text :content
      t.references :correct_answer, index: true
      t.belongs_to :objective, index: true
      t.belongs_to :assessment, index: true

      t.timestamps null: false
    end
  end
end
