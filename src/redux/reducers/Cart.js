const initState = {
  selectedItems: { items: [], restaurantName: "" },
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLETOCART": {
      const { food, restaurantName, checkboxValue } = action.payload;
      let newState = { ...state };

      if (checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, food],
          restaurantName: restaurantName,
        };
      } else {
        newState.selectedItems.items = [...newState.selectedItems.items].filter(
          (foodItem) => foodItem !== food
        ); //! exp
      }
      //console.log(newState, "✌️");
      return newState;
    }

    case "EMPTY_CART":
      return initState;
    default:
      return state;
  }
};

export default cartReducer;
