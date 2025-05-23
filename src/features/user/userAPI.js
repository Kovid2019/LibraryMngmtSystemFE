import { apiProcessor } from "../../services/api";
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const userApiEP = apiBaseUrl + "/api/v1/users";
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
