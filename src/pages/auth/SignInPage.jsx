import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";

const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
              value={form.email}
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="*******"
              value={form.password}
              onChange={handleOnChange}
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
