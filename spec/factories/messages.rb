FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/projects/dog.jpeg")}
    user
    group
  end
end