import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-8 text-gray-800 text-center font-bold">
            Sign Up
          </h2>
          <form>
            <div className="mb-4">
              <div className="relative">
                <span className="inline-block absolute left-0 top-0 ml-3 mt-3">
                  <FiUser size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:shadow-outline-blue"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <span className="inline-block absolute left-0 top-0 ml-3 mt-3">
                  <FiMail size={18} />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:shadow-outline-blue"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <span className="inline-block absolute left-0 top-0 ml-3 mt-3">
                  <FiLock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:shadow-outline-blue"
                />
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-black text-white p-4 rounded-lg tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:text-black
                    shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="text-gray-700 font-medium hover:text-gray-800 ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
