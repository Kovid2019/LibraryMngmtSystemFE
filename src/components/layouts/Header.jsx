import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/lms-logo-wide.png";
import { IoMdHome } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { logOutApi } from "../../services/authApi";
import { setUser } from "../../features/user/userSlice";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleOnLogout = () => {
    //Call API to logout from the backend
    logOutApi();
    //Logout from the frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" width="100px" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home <IoMdHome />
            </Link>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/user">
                  Dashboard <AiFillDashboard />
                </Link>
                <Link className="nav-link" to="/" onClick={handleOnLogout}>
                  LogOut <IoLogOut />
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  Sign Up <SiGnuprivacyguard />
                </Link>
                <Link className="nav-link" to="/login">
                  Log In <FaSignInAlt />
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
