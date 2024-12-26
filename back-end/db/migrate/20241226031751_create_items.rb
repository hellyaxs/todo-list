class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :titulo
      t.string :descricao_breve
      t.boolean :check
      t.references :lista, null: false, foreign_key: true

      t.timestamps
    end
  end
end
