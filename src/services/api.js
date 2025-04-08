import axios from "axios";
import { toast } from "react-toastify";
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
    return {
      status: "error",
      message: msg,
    };
  }
};
