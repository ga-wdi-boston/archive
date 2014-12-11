class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.text :name
      t.text :description

      t.timestamps null: false
    end
  end
end
