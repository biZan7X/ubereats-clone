const toggleToCart = (payload) => {
  return {
    type: "TOGGLETOCART",
    payload,
  };
};

const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

const placeOrder = (payload) => {
  return {
    type: "PLACE_ORDER",
    payload,
  };
};

const setIsOrderLoading = (payload) => {
  return {
    type: "SETISORDERLOADING",
    payload,
  };
};

export { toggleToCart, placeOrder, emptyCart, setIsOrderLoading };
