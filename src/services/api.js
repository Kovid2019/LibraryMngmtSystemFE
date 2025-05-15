import axios from "axios";
import { toast } from "react-toastify";
import { fetchNewAccessJWTApi } from "./authApi";
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivateCall,
  isRefreshJWT,
}) => {
  try {
    const headers = {};

    if (isPrivateCall) {
      const token = isRefreshJWT ? getRefreshJWT() : getAccessJWT();
      headers.authorization = "bearer " + token;
      if (!token)
        return alert("Please Logout and Login again to make this request");
    }
    const responsePending = axios({
      url,
      method,
      data: payload,
      headers,
    });
    //Show Toast message
    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please Wait...",
      });
    }
    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);
    if (error.status === 401) {
      if (msg === "jwt expired") {
        //Call api to get new accessJWT
        const { payload } = await fetchNewAccessJWTApi();
        if (payload) {
          sessionStorage.setItem("accessJWT", payload);
          //Call the api processor again with the new accessJWT
          return apiProcessor({
            url,
            method,
            payload,
            showToast,
            isPrivateCall,
            isRefreshJWT,
          });
        }
      } else {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("refreshJWT");
      }
    }
    return {
      status: "error",
      message: msg,
    };
  }
};
