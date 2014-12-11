class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.text :name
      t.text :description
      t.belongs_to :subject, index: true

      t.timestamps null: false
    end
    add_foreign_key :topics, :subjects
  end
end
