import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const PostFiltersForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleOnValueChange = (e) => {
    setSearchTerm(e.target.value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(e.target.value);
    }, 300);
  };
  return (
    <form>
      <input type="text" onChange={handleOnValueChange} value={searchTerm} />
    </form>
  );
};

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

export default PostFiltersForm;
