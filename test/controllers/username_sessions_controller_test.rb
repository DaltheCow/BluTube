require 'test_helper'

class UsernameSessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get username_sessions_create_url
    assert_response :success
  end

end
