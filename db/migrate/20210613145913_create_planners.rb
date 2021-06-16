class CreatePlanners < ActiveRecord::Migration[6.1]
  def change
    create_table :planners do |t|
      t.date :date_from
      t.date :date_to
      t.boolean :welkin
      t.boolean :bp
      t.integer :current_primogems
      t.datetime :expired_record
      t.timestamps
    end
  end
end
