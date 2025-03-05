import instance from ".";

const getAllRestaurants = async () => {
  const response = await instance.get("/resturant");
  return response.data;
};

const getresturant = async (_id) => {
  const response = await instance.get(`/resturant/${_id}`);
  return response.data;
};

export {
  getAllRestaurants,
  getresturant,
};