import { useState } from 'react';

export function useForm(defaultState = {}) {
  const [values, setValues] = useState(defaultState);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}
