const setActiveTab = (payload) => {
  return {
    type: "SETACTIVETAB",
    payload,
  };
};

const setCity = (payload) => {
  return {
    type: "SETCITY",
    payload,
  };
};

const setRefreshing = (payload) => {
  return {
    type: "SETREFRESHING",
    payload,
  };
};

const getRestaurantData = () => {
  return {
    type: "GETRESTAURANTDATA",
  };
};

const setRestaurantData = (payload) => {
  return {
    type: "SETRESTAURANTDATA",
    payload,
  };
};

export {
  setCity,
  setActiveTab,
  setRestaurantData,
  getRestaurantData,
  setRefreshing,
};
