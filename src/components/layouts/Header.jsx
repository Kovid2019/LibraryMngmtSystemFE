import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/lms-logo-wide.png";
import logo from "../../assets/img/lms-logo-wide.png";
import { IoMdHome } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { logOutApi } from "../../services/authApi";
import { setUser } from "../../features/user/userSlice";
import { InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RiBookShelfFill } from "react-icons/ri";
import { useRef } from "react";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const navigate = useNavigate();
  const handleOnLogout = () => {
    //Call API to logout from the backend
    logOutApi();
    //Logout from the frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };

  const handleOnSearch = (e) => {
    e.preventDefault();
    const str = searchRef.current.value;
    str && navigate("/search?query=" + str);
  };
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" width="100px" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-100 d-flex justify-content-between flex-column flex-md-row">
            <div></div>
            <Form style={{ width: "40%" }} onSubmit={handleOnSearch}>
              <InputGroup>
                <Form.Control
                  placeholder="Search your book"
                  aria-label="Search your book"
                  aria-describedby="basic-addon2"
                  name="s"
                  ref={searchRef}
                />
                <InputGroup.Text id="basic-addon2" as="button">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav>
              <Link className="nav-link" to="/">
                Home <IoMdHome />
              </Link>
              <Link className="nav-link" to="/all-books">
                Books <RiBookShelfFill />
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
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
