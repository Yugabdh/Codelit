
export default function validate(values) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errors = {};
  if (!values.email) {
    errors.email = "Please enter email address";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please provide proper email address";
  }
  if (!values.password) {
    errors.password = "Please enter password";
  }
  return errors;
};