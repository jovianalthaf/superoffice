import Link from "next/link";

export default function FormRegister() {
  return (
    <form action="" className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 mt-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Jhon Doe"
          className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5  text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 mt-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          placeholder="johndoe@gmail.com"
          type="text"
          name="email"
          className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5  text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 mt-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="*******"
          className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5  text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 mt-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="*******"
          className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5  text-gray-900"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">message</span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
      <p className="text-sm font-light text-gray-500">
        Already have an account ?
        <Link href="/login">
          {" "}
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign in
          </span>{" "}
        </Link>
      </p>
    </form>
  );
}
