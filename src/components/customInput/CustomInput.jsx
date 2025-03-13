import React from "react";
import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
      {/* Chat 
      <Form.Control
        type={type}
        name={name}
        value={value} // Bind the input value to the form state
        onChange={onChange} // Handle input changes
        required={required}
      />
      {/* GPT */}
    </Form.Group>
  );
};
