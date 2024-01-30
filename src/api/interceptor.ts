import axios from "axios";


const api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});



const errorInterceptor = async (error: any) => {
  try {

  } catch (error: any) {

  }
};

//------------------------------------------------------------------------------------------------------------------------------------------
//                                                                    end error interceptor
//==========================================================================================================================================

const responseInterceptor = (response: any) => {
  if (response.data && response.data.errors) {
    // alert(translate_error(response.data.errors[0].title));
    return Promise.reject(response.data.error.title);
  }
  return response;
};

api.interceptors.response.use(responseInterceptor, errorInterceptor);


export default api;
