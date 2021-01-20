class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.text :content, null: false, default: ''

      t.timestamps
    end
  end
end
