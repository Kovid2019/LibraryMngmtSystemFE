import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSignupInputs";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authApi";

const initialState = {};
/* Chat 
  {fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",};
  /* GPT */

const SignUpPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password)
      return alert("Password do not match");
    const result = await signUpNewUserApi(rest);
    console.log(result);
    /*Chat if (result) {
      console.log("Resetting form..."); // Log before resetting
      resetForm(); // Call resetForm to reset the form fields
      console.log("Form has been reset"); // Log to confirm reset
    } /*GPT*/
  };
  console.log(passwordErrors);
  return (
    <div className="d-flex justify-content-center">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card p-4 mt-5 shadow-lg mb-5"
      >
        <h2>Join our Library community!</h2>
        <hr />
        {signUpInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            /*Chat value={form[input.name]} // Bind the input value to the form state /*GPT*/
            onChange={handleOnChange}
          />
        ))}

        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>
        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
