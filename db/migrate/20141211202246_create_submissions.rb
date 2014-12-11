class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.belongs_to :answer, index: true
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :submissions, :answers
    add_foreign_key :submissions, :users
  end
end
