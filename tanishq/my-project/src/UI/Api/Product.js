import { APIinstance } from "./axiosConfig";


// =================GetAllProduct API===========================
export const fetchAllProduct = async () => {
  try {
    let response = await APIinstance.get("/product/getAll");
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

// export const deleteProduct = async (id,token) => {
//   try {
//     let response = await APIinstance.delete("/product/delete" + id,null,{
//       headers: {
//         authorization: "bearer " + token,
//       },
//     });
//     console.log("response:", response)
//     return { error: null, data: response.data };
//   } catch (error) {
//     console.log("error:", error)
//     return { error: error, data: null };
//   }
// };

// =================DeleteProduct API===========================
export const deleteProduct = async (id, token) => {
  try {
    let response = await APIinstance.delete(`/product/delete/${id}`, null, {
      headers: {
        authorization: "bearer " + token,
      },
    });
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

// =================GetAllProduct API===========================
export const createProduct = async () => {
  try {
    let response = await APIinstance.post("/product/create");
    console.log("Createe Product", response)
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};


