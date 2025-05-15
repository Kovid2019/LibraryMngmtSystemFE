import { apiProcessor } from "../../services/api";
// const apiBaseUrl = "http://localhost:8000";
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const bookApiEP = apiBaseUrl + "/api/v1/books";
//Call API processor to fetch the user

export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "post",
    // get: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
