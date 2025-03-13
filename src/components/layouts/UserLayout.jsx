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
      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">Welcome Back</div>
            <h4>Kovid Kunduru</h4> <hr />
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            {/* Main body */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </AuthRoute>
  );
};
