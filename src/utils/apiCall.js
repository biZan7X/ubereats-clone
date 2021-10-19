const apiCall = async (url = "", method = "GET", data = {}) => {
  const response = await fetch(url, {
    method: method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return resData;
};

export default apiCall;
