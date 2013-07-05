require 'test_helper'

class ExampleControllersControllerTest < ActionController::TestCase
  setup do
    @example_controller = example_controllers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:example_controllers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create example_controller" do
    assert_difference('ExampleController.count') do
      post :create, example_controller: {  }
    end

    assert_redirected_to example_controller_path(assigns(:example_controller))
  end

  test "should show example_controller" do
    get :show, id: @example_controller
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @example_controller
    assert_response :success
  end

  test "should update example_controller" do
    put :update, id: @example_controller, example_controller: {  }
    assert_redirected_to example_controller_path(assigns(:example_controller))
  end

  test "should destroy example_controller" do
    assert_difference('ExampleController.count', -1) do
      delete :destroy, id: @example_controller
    end

    assert_redirected_to example_controllers_path
  end
end
