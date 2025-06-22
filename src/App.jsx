import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPublicBookAction } from "@features/book/bookAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch all the data, then mount in the redux.
    dispatch(fetchAllPublicBookAction());
  }, [dispatch]);
  return (
    <>
      <AppRoutes />

      <ToastContainer />
    </>
  );
}

export default App;
