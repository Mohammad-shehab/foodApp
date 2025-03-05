import instance from ".";
import { setToken } from "./storage";

const register = async (userInfo, image) => {
  const formData = new FormData();

  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  if (image) {
    formData.append("image", {
      name: "profile.jpg",
      type: "image/jpeg",
      uri: image,
    });
  }

  try {
    const res = await instance.post("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.error("Registration error:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const login = async (userInfo) => {
  try {
    const res = await instance.post("/auth/login", userInfo);
    console.log("LOGIN TOKEN", res.data.token);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const getProfile = async () => {
  try {
    const res = await instance.get("/auth/profile");
    return res.data;
  } catch (error) {
    console.error("Profile fetch error:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export { login, register, getProfile };