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
