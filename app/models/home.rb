# == Schema Information
#
# Table name: homes
#
#  id         :bigint(8)        not null, primary key
#  address    :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  beds       :integer          not null
#  baths      :integer          not null
#  price      :integer          not null
#  sale       :boolean          not null
#  rent       :boolean          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Home < ApplicationRecord
  validates :address, :latitude, :longitude, :beds, :baths, :price, :owner_id, presence: true
  validates_uniqueness_of :latitude, :scope => [:longitude]
  validates_inclusion_of :sale, :rent, in: [true, false]

  has_many_attached :photos
  # has_one_attached :photo

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
