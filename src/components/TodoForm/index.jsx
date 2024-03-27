import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleOnValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your task here!"
        id="todo"
        value={value}
        onChange={handleOnValueChange}
      />
      <button type="submit" onClick={handleSubmitForm}>
        Submit
      </button>
    </form>
  );
};

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
  onSubmit: null,
};

export default ToDoForm;
