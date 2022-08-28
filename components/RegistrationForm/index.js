import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import InputField from "../InputField";
import useForm from "../../hooks/useForm";
import validate from "./validationRules";

import auth from "../../firebase/firebase";

const RegistrationForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const register = () => {
    // TODO: write register logic
    setIsSubmitting(false);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  } = useForm(register, validate);

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      noValidate
      method="POST"
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm">
        <InputField
          label="Name"
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName || ""}
          handleChange={handleChange}
          required={true}
          placeholder=""
          disabled={loading}
          error={errors.fullName}
        />
      </div>
      <div className="rounded-md shadow-sm">
        <InputField
          label="Email address"
          id="email"
          name="email"
          type="email"
          value={values.email || ""}
          handleChange={handleChange}
          autoComplete="email"
          required={true}
          disabled={loading}
          error={errors.email}
        />
      </div>
      <div className="rounded-md shadow-sm">
        <InputField
          label="Password"
          id="password"
          name="password"
          type="password"
          value={values.password || ""}
          handleChange={handleChange}
          autoComplete="password"
          required={true}
          disabled={loading}
          error={errors.password}
        />
      </div>
      <div className="rounded-md shadow-sm">
        <InputField
          label="Confirm password"
          id="repassword"
          name="repassword"
          type="password"
          value={values.repassword || ""}
          handleChange={handleChange}
          autoComplete="repassword"
          required={true}
          disabled={loading}
          error={errors.repassword}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-primary-200 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease focus:ring-indigo-500 ${
            isSubmitting || loading ? "bg-gray-500 hover:bg-gray-500" : ""
          }`}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
