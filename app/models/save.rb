# == Schema Information
#
# Table name: saves
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  home_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Save < ApplicationRecord
  validates :user_id, :home_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:home_id]

  belongs_to :user
  belongs_to :home
end
