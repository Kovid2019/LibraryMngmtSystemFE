import { apiProcessor } from "../../services/api";
// import { apiProcessor } from "../../services/api.js";
const apiBaseUrl = "http://localhost:8000";
const userApiEP = apiBaseUrl + "/api/v1/user";
//Call API processor to fetch the user

export const fetchUserApi = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    // get: "post",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
