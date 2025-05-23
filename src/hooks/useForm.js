import { useEffect, useState } from "react";
import { validator } from "../utils/validatePassword";

const handleOnChange = ({ e, form, setForm }) => {
  let { checked, name, value } = e.target;
  if (name === "status") {
    console.log(name, value, checked);
    value = checked ? "active" : "inactive";
  }
  setForm({
    ...form,
    [name]: value,
  });
};
const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setPasswordErrors] = useState([]);

  //Only when password and confirmPassword changes
  useEffect(() => {
    const erroArg = validator(form.password, form.confirmPassword);
    setPasswordErrors(erroArg);
  }, [form.password, form.confirmPassword]);

  /* Chat  const resetForm = () => {
    setForm(initialState); //Reset the form to initial state.
    setPasswordErrors([]); //Reset the passwordError[] to empty array.
  }; /* GPT */
  return {
    form,
    setForm,
    passwordErrors,

    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};
export default useForm;
