import React from "react";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden h-fit sm:scale-75 scale-90">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-[#7B4BFF] p-6 sm:p-8 md:p-10 text-white sm:flex hidden flex-col justify-start items-center md:items-start text-center md:text-left ">
          <div className="flex items-center mb-6">
            <img src="src/assets/tooth_vector.png" alt="Dentalign Logo" className="h-6 sm:h-7 md:h-8 mr-2" />
            <span className="text-xl sm:text-2xl font-bold">Dentalign</span>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
              Welcome to Dentalign Support Portal
            </h2>
            <p className="text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md">
              Get assistance with your dental alignment journey through our dedicated ticketing system.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 w-full p-8 md:p-10 flex flex-col justify-evenly">
          <div>
          <h2 className="sm:text-4xl text-xl font-semibold text-gray-800 mb-1">Sign In</h2>
          <p className="sm:text-lg text-gray-500 mb-6">Please sign in to access your account</p>
          </div>

          <form className="space-y-6 text-sm sm:text-base md:text-lg">
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
                placeholder="Enter your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm sm:text-base">
                <input type="checkbox" className="mr-2 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-sm sm:text-base text-violet-600 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 sm:py-3 rounded-lg hover:bg-violet-700 transition cursor-pointer"
            >
              Sign In
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
              Don’t have an account?{" "}
              <a href="/SignUp" className="text-violet-600 font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
