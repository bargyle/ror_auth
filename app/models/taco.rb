class Taco < ApplicationRecord
  belongs_to :user
  has_many :tacos
end
