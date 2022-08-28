
export default function validate(values) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errors = {};
  if (!values.fullName) {
    errors.fullName = "Please enter name";
  } else if (!(/^([a-zA-Z'-.]+(?:\ [a-zA-Z'-.]+)?)$/.test(values.fullName.trim()))) {
    errors.fullName = "Please enter name(Firstname and lastname)";
  }
  if (!values.email) {
    errors.email = "Please enter email address";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please provide proper email address";
  }
  if (!values.password) {
    errors.password = "Please enter password";
  } else if (values.password.trim().length <= 7) {
    errors.password = "Password should be minimum 8 characters";
  }
  if (!values.repassword) {
    errors.repassword = "Please re-enter password";
  } else if (!(values.password === values.repassword.trim())) {
    errors.repassword = "Password not matching";
  }
  return errors;
};