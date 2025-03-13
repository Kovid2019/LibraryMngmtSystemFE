import { Route, Routes } from "react-router-dom";
// import DashboardPage from "../pages/dashboard/DashboardPage";
// import HomePage from "../pages/home/HomePage";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  VerifyUser,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBookPage,
  ReviewPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { UserLayout } from "@components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        {/* <Route path="book-landing" element={<BookLandingPage />} /> */}
      </Route>

      {/* Private Pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="borrow-history" element={<BorrowPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
