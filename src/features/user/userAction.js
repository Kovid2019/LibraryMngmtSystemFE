import { fetchNewAccessJWTApi } from "../../services/authApi";
import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  // Call API
  const { status, payload } = await fetchUserApi();

  //Receive user

  //Dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    //Fetch accessJWT and set in the sessionStorage

    const { payload } = await fetchNewAccessJWTApi();

    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
    //dispatch(fetchUserAction());
  }
};
