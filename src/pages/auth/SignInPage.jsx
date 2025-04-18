import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { signinUserApi } from "../../services/authApi";
import { fetchUserApi } from "../../features/user/userApi";
import { autoLoginUser, fetchUserAction } from "../../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
  email: "a2@a.com",
  password: "Roh@123",
};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id ? navigate("/user") : dispatch(autoLoginUser());
  }, [user?._id, navigate, dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.email && form.password) {
      const { payload } = await signinUserApi(form);
      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);

        //Call API to get user profile
        dispatch(fetchUserAction());
      }

      // TODO : Get user and redirect to dashboard.
    } else {
      alert("Please enter email and password");
    }
  };
  return (
    <div className="signIn-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome back to the Library</Card.Title> <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              onChange={handleOnChange}
              value={form.email}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="*******"
              onChange={handleOnChange}
              value={form.password}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3">
            {" "}
            Forget Password? <a href="/forget-password">Reset Password</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
