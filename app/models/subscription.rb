class Subscription < ApplicationRecord

  validates_uniqueness_of :subscriber_id, :scope => [:subscribee_id]

  before_validation :ensure_not_subscribing_to_self


  belongs_to :subscriber,
    class_name: 'User'

  belongs_to :subscribee,
    class_name: 'User'

  def ensure_not_subscribing_to_self
    throw :abort if self.subscriber_id == self.subscribee_id
  end

end
