import Link from "next/link";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import InputField from "../InputField";
import useForm from "../../hooks/useForm";
import validate from "./validationRules";

import auth from "../../firebase/firebase";

const SignInForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = () => {
    // TODO: write login logic
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
    <form className="space-y-4" action="#" method="POST">
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
            disabled={loading}
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
            disabled={loading}
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

export default SignInForm;
