import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { CustomInput } from "@components/customInput/CustomInput";
import { useEffect, useRef, useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {
  requestPassResetOTPApi,
  resetPasswordApi,
} from "../../services/authApi";

const initialState = {};
const timeToRequestOTPAgain = 10; //seconds
const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const { form, passwordErrors, handleOnChange } = useForm(initialState);
  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOtpBtnDisabled, setIsOtpBtnDisabled] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOtpBtnDisabled(false);
    }
  }, [counter]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    // Call the API to send OTP
    setIsOtpPending(true);
    setIsOtpBtnDisabled(true);
    const response = await requestPassResetOTPApi({ email });
    if (response?.status === "success") {
      setShowPassResetForm(true);
    }
    setIsOtpPending(false);
    // setIsOtpBtnDisabled(false);
    setCounter(timeToRequestOTPAgain);
  };
  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    const payload = {
      email,
      otp: form.otp,
      password: form.password,
    };
    const response = await resetPasswordApi(payload);
    console.log(response);
    if (response?.status === "success") {
      // Redirect user to login page in 3 seconds
      setTimeout(() => navigate("/login"), 3000);
    }
  };
  return (
    <div className="signIn-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password? </Card.Title> <hr />
          <p>
            Dont worry. Fill up the form below to request OTP to reset your
            password.
          </p>
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit" disabled={isOtpBtnDisabled}>
                {isOtpPending ? (
                  <Spinner variant="border" />
                ) : counter > 0 ? (
                  `Request OTP in ${counter} sec`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>
          {showPassResetForm && (
            <>
              <hr />
              {/* Show this form below once OTP is requested. */}
              <div>
                <Alert variant="success">
                  {" "}
                  We will send you an OTP to your email, if email is found in
                  your system. Please check your spam/junk folder, if you dont
                  see email in the inbox{" "}
                </Alert>
                <Form onSubmit={handleOnPasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="36548"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="New Password"
                    name="password"
                    type="password"
                    required
                    placeholder="*******"
                    onChange={handleOnChange}
                  />

                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="*******"
                    onChange={handleOnChange}
                  />

                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                    </ul>
                  </div>
                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}
          <div className="text-end my-3">
            {" "}
            Ready to Login? <a href="/login">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
