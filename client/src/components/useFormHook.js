import React, { useState } from "react";

function useForm(initialValue, cb) {
  const [values, setValues] = useState(initialValue);

  const handleChanges = e => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return [values, handleChanges];
}

export default useForm;
