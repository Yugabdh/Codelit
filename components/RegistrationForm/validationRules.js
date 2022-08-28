
export default function validate(values) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errors = {};
  if (!values.fullName) {
    errors.fullName = "Please enter full name";
  }
  if (!values.email) {
    errors.email = "Please enter email address";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please provide proper email address";
  }
  if (!values.password) {
    errors.password = "Please enter password";
  } else if (values.password.length < 8) {
    errors.password = "Password should be minimum 8 characters";
  }
  if (!values.repassword) {
    errors.repassword = "Please re-enter password";
  } else if (!(values.password === values.repassword)) {
    errors.repassword = "Password not matching";
  }
  return errors;
};