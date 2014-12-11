class CreateMaterials < ActiveRecord::Migration
  def change
    create_table :materials do |t|
      t.text :title
      t.text :content
      t.text :url
      t.belongs_to :objective, index: true

      t.timestamps null: false
    end
  end
end
