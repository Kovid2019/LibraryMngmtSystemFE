import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Stack gap={2}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          Book
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
          All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          Profile
        </Link>
      </div>
    </Stack>
  );
};
