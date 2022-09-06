import Link from "next/link";
import InputField from "../InputField";
import useForm from "../../hooks/useForm";
import validate from "./validationRules";

import { useFirebase } from "react-redux-firebase";
import { useState } from "react";

const SignInForm = () => {
  const firebase = useFirebase();
  const [errorMsg, setErrorMsg] = useState(null);

  const login = () => {
    setErrorMsg(null);
    let email = values.email.trim();
    let password = values.password.trim();

    firebase
      .login({
        email,
        password,
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage.split(":")[1].split("(")[0].trim());
      });
    setIsSubmitting(false);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  } = useForm(login, validate);

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      noValidate
      method="POST"
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm">
        <div>
          <InputField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={values.email || ""}
            handleChange={handleChange}
            autoComplete="email"
            required={true}
            error={errors.email}
          />
        </div>
      </div>
      <div className="rounded-md shadow-sm">
        <div>
          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={values.password || ""}
            handleChange={handleChange}
            autoComplete="password"
            required={true}
            error={errors.password}
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="text-sm">
          <Link href="#">
            <a
              href="#"
              className="font-medium text-primary-200 hover:text-primary-400"
            >
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-primary-200 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease focus:ring-indigo-500 ${
            isSubmitting ? "bg-gray-500 hover:bg-gray-500" : ""
          }`}
        >
          Login
        </button>
        {errorMsg !== null && (
          <span className="text-red-500 font-light">{errorMsg}</span>
        )}
      </div>
    </form>
  );
};

export default SignInForm;
