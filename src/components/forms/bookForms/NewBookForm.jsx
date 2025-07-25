import { CustomInput } from "@components/customInput/CustomInput";
import { Button, Form } from "react-bootstrap";
import { newBookInputs } from "@assets/customInputs/bookInputs";
import useForm from "@hooks/useForm";
import { postNewBookAction } from "@features/book/bookAction";
import { useState } from "react";
const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();

  const handleOnImageSelect = (e) => {
    setImage(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    postNewBookAction(formData);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details here</h3> <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            required
          />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit"> Submit new book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
