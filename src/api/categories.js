import instance from ".";

const getAllCategories = async () => {
  const response = await instance.get("/category");
  return response.data;
};

export {
    getAllCategories,
 };