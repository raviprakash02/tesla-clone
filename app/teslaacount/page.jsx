import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white w-80">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-8"></div>
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">
              Email
              <span className="ml-1 text-gray-400 text-sm"></span>
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Next
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-600 underline">
              Trouble Signing In?
            </a>
          </div>
          <div className="flex items-center justify-center mt-6">
            <span className="border-b w-1/4 lg:w-1/3"></span>
            <span className="text-xs text-center text-gray-500 uppercase px-2">
              Or
            </span>
            <span className="border-b w-1/4 lg:w-1/3"></span>
          </div>
          <button
            type="button"
            className="w-full py-3 mt-6 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
