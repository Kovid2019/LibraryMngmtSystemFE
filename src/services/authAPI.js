//All API's related to signup and login token

import { apiProcessor } from "./api";

const apiBaseUrl = "http://localhost:8000";
const authApiEP = apiBaseUrl + "/api/v1/auth";

export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcessor(obj);
};
export const activateNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};
export const signinUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};

//Request new accessJWT API.
export const fetchNewAccessJWTApi = async () => {
  const obj = {
    url: authApiEP + "/renew-jwt",
    method: "get",
    isPrivateCall: true,
    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};
//Logout user
export const logOutApi = async () => {
  const obj = {
    url: authApiEP + "/logout",
    method: "get",
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};
//Request pasword reset OTP
export const requestPassResetOTPApi = async (payload) => {
  const obj = {
    url: authApiEP + "/otp",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};
//Reset password
export const resetPasswordApi = async (payload) => {
  const obj = {
    url: authApiEP + "/reset-password",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
