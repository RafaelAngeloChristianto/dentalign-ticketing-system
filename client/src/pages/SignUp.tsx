import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden h-fit sm:scale-75 scale-90">

        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-[#7B4BFF] p-6 sm:p-8 md:p-10 text-white sm:flex hidden flex-col justify-start items-center md:items-start text-center md:text-left ">
          <div className="flex items-center mb-6">
            <img src="src/assets/tooth_vector.png" alt="Dentalign Logo" className="h-6 sm:h-7 md:h-8 mr-2" />
            <span className="text-xl sm:text-2xl font-bold">Dentalign</span>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 hidden sm:block">
              Create Your Dentalign Account
            </h2>
            <p className="text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md">
              Join our support portal to manage your dental alignment journey with ease.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 w-full p-8 md:p-10 flex flex-col justify-evenly">
          <div>
            <h2 className="sm:text-4xl text-xl font-semibold text-gray-800 mb-1">Sign Up</h2>
            <p className="sm:text-lg text-gray-500 mb-6">Create an account to get started</p>
          </div>

          <form className="space-y-6 text-sm sm:text-base md:text-lg">
            <div>
              <label className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 sm:py-3 rounded-lg hover:bg-violet-700 transition cursor-pointer"
            >
              Sign Up
            </button>

            <div className="flex items-center my-4 sm:my-6">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-2 sm:mx-3 text-gray-500 text-sm sm:text-base">OR</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              Continue with Google
            </button>

            <p className="text-sm sm:text-base text-center mt-4 sm:mt-6 text-gray-600">
              Already have an account?{" "}
              <a href="/SignIn" className="text-violet-600 font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
