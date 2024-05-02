import { APIinstance } from "./axiosConfig";

export const loginApi=async(data)=>{
    console.log("🚀 ~ file: auth.js:7 ~ loginApi ~ data:", data)
try {
    
    let response =await APIinstance.post("/user/signin",data);
 return {error:null,data:response.data}
} catch (error) {
    console.log("🚀 ~ file: auth.js:9 ~ loginApi ~ error:", error)
    return{error:error,data:null}
}
}