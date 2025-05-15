import { CustomInput } from "@components/customInput/CustomInput";
import { Button, Form } from "react-bootstrap";
import { newBookInputs } from "@assets/customInputs/bookInputs";
import useForm from "@hooks/useForm";
import { postNewBookAction } from "@features/book/bookAction";
const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    postNewBookAction(form);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details here</h3> <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit"> Submit new book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
