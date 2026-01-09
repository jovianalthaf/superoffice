export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0B0F1A]">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-[#121826] shadow-md px-8 py-10">
        <h1 className="text-xl font-bold text-[#000929] dark:text-white text-center">
          Login
        </h1>

        <input
          className="mt-4 w-full rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-[#0F172A]
                     text-black dark:text-white
                     px-3 py-2 outline-none"
          placeholder="Email"
        />

        <button className="mt-6 w-full rounded-lg  dark:bg-red-600 text-white py-2">
          Sign in
        </button>
      </div>
    </div>
  );
}
