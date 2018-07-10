require 'test_helper'

class Api::UserControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_user_controller_create_url
    assert_response :success
  end

end
