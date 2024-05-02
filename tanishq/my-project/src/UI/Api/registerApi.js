import { APIinstance } from "./axiosConfig";

export const registerApi = async (data) => {
  try {
    let response = await APIinstance.post("/user/signup", data);
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
