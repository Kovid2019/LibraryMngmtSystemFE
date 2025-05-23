import { CustomInput } from "@components/customInput/CustomInput";
import { Button, Form } from "react-bootstrap";
import { editBookInputs } from "@assets/customInputs/bookInputs";
import useForm from "@hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateBookApi } from "@features/book/bookAPI";
const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  console.log(_id);
  const navigate = useNavigate();
  const { form, setForm, handleOnChange } = useForm(initialState);

  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);

      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addedBy,
      createdAt,
      lastUpdateBy,
      slug,
      updatedAt,
      __v,
      isbn,
      available,
      ...rest
    } = form;
    console.log(rest);
    const result = await updateBookApi(rest);
    console.log(result);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details here</h3> <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status?.toUpperCase()}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />{" "}
        </Form.Group>
        {editBookInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name]}
          />
        ))}
        <div className="mb-3">
          <hr />
          <h4> Additional Info </h4>
          <div className="mb-2">
            Added By : {form.addedBy?.name} <br />
            Date : {form.createdAt}
          </div>
          <div>
            Last Updated By : {form.lastUpdateBy?.name} <br />
            Date : {form.updatedAt}
          </div>
        </div>
        <div className="d-grid">
          <Button type="submit"> Submit new book</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
