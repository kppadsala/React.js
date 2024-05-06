import { APIinstance } from "./axiosConfig";

export const fetchAllProduct = async () => {
  try {
    let response = await APIinstance.get("/product/getAll");
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

export const deleteProduct = async (id) => {
  try {
    let response = await APIinstance.delete("/product/delete" + id);
    console.log("response:", response)
    return { error: null, data: response.data };
  } catch (error) {
    console.log("error:", error)
    return { error: error, data: null };
  }
};