require 'test_helper'

class Api::VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_videos_index_url
    assert_response :success
  end

  test "should get show" do
    get api_videos_show_url
    assert_response :success
  end

  test "should get create" do
    get api_videos_create_url
    assert_response :success
  end

  test "should get update" do
    get api_videos_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_videos_delete_url
    assert_response :success
  end

end
