import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-full h-screen">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full border border-gray-300">
        <div className="bg-gray-800 text-center rounded-t-lg px-8 py-6">
          <h2 className="text-2xl font-bold text-white">Welcome back!</h2>
          <p className="text-gray-400 mt-2">
            Enter your credentials to sign in
          </p>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2">
              <FiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="custom-bg-color hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="bg-gray-100 rounded-b-lg px-8 py-4">
          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="text-gray-700 hover:text-gray-800"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-sm">
            <span className="text-gray-400">Don't have an account?</span>
            <Link
              to="/signup"
              className="text-gray-700 font-medium hover:text-gray-800 ml-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
