import Link from "next/link";

const RegistrationForm = () => {
  return (
    
    <form className="space-y-4" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="fullName" className="text-gray-50">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="fullName"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 bg-bg-faint mt-1 text-gray-50 focus:outline-none border border-bg-faint focus:border-gray-50 focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="text-gray-50">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 bg-bg-faint mt-1 text-gray-50 focus:outline-none border border-bg-faint focus:border-gray-50 focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="password" className="text-gray-50">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 bg-bg-faint mt-1 text-gray-50 focus:outline-none border border-bg-faint focus:border-gray-50 focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="password" className="text-gray-50">
            Confirm password
          </label>
          <input
            id="repassword"
            name="repassword"
            type="repassword"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 bg-bg-faint mt-1 text-gray-50 focus:outline-none border border-bg-faint focus:border-gray-50 focus:z-10 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-primary-200 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm;