class CreateObjectives < ActiveRecord::Migration
  def change
    create_table :objectives do |t|
      t.text :name
      t.text :description
      t.belongs_to :topic, index: true
      t.belongs_to :assessment, index: true

      t.timestamps null: false
    end
    add_foreign_key :objectives, :topics
    add_foreign_key :objectives, :assessments
  end
end
