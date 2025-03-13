import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div>
      {/* Nav Bar */}
      <Header />
      {/* Main body */}
      <main className="main">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
