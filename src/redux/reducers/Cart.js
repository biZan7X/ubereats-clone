const initState = {
  selectedItems: { items: [], restaurantName: "" },
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLETOCART": {
      console.log("clicked");
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
