import { useCallback, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export function useFormWithValidation(defaultValueState = {}) {
  const [values, setValues] = useState(defaultValueState);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target
    const form = target.closest('form')
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (target.type === 'email') {
      target.setCustomValidity(!value || isEmail(value) ? '' : 'Некорректный email')
    }
    setValues({...values, [name]: value})
    setErrors({...errors, [name]: target.validationMessage })
    setIsValid(form.checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, handleChange, errors, isValid, resetForm };
}
