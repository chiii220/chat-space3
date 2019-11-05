# README

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

#### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

##### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :groups_users

###### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|group|integer|null: false, foreign_key: true|
|user|integer|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|


###### Association
- belongs_to :group
- belongs_to :user

###### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

###### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users