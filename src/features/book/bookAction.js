import { adminFetchAllBookApi, postNewBookApi } from "./bookAPI";
import { setBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookApi();
  status === "success" && dispatch(setBook(payload));
};
