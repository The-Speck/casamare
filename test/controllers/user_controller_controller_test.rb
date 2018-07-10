require 'test_helper'

class UserControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get user_controller_create_url
    assert_response :success
  end

end
