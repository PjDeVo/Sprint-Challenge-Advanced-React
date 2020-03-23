import React, { useState } from "react";

function useForm(initialValue, cb) {
  const [values, setValues] = useState(initialValue);

  const handleChanges = e => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    cb();
  };
  return [values, handleChanges, handleSubmit];
}

export default useForm;
