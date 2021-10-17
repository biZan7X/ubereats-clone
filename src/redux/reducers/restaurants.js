const init = {
  activeTab: "Delivery",
  city: "San Francisco",
  refreshing: false,
  restaurantData: [],
};

const restaurantReducers = (state = init, action) => {
  switch (action.type) {
    case "SETACTIVETAB":
      return { ...state, activeTab: action.payload };
    case "SETCITY":
      return { ...state, city: action.payload };
    case "SETRESTAURANTDATA":
      return { ...state, restaurantData: action.payload };
    case "SETREFRESHING":
      return { ...state, refreshing: action.payload };
    default:
      return state;
  }
};

export default restaurantReducers;
