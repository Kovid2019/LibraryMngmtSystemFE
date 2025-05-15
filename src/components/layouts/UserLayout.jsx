import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "./auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* Nav Bar */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ width: "200px" }}>
          <div className="p-3">Welcome Back</div>
          <h4>Kovid Kunduru</h4> <hr />
          <Sidebar />
        </div>

        {/* Main body */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </AuthRoute>
  );
};
