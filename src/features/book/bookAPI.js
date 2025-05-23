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

// Call API processor to fetch all books for "Admin"
export const adminFetchAllBookApi = async () => {
  const obj = {
    url: bookApiEP + "/admin",
    method: "get",

    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const updateBookApi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "put",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const deleteBookApi = async (_id) => {
  const obj = {
    url: bookApiEP + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
