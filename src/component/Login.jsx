import React from 'react'
// import "../component/Login.css"

const Login = () => {
  return (
    <div
    className="min-h-screen flex items-center justify-center bg-green-900/20 bg-cover bg-fixed"
    style={{ backgroundImage: "url('eklavya.jpg')" }}
  >
    {/* Logo */}
    <img src="logo.png" alt="Logo" className="absolute top-5 left-5 w-20" />

    {/* Login Container */}
    <div className="bg-white/90 p-8 rounded-lg border-4 border-green-500 shadow-lg max-w-sm w-full text-center">
      <h2 className="text-2xl font-bold text-black mb-6">Login</h2>
      <form>
        {/* Email Field */}
        <div className="mb-4 text-left">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your registered email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 text-left">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>

      {/* Message */}
      <div id="message" className="mt-4 text-sm text-red-600"></div>

      {/* Register Link */}
      <p className="mt-6 text-sm">
        Don't have an account?{" "}
        <a
          href="register.html"
          className="text-blue-600 font-bold hover:underline"
        >
          Register here
        </a>
      </p>
    </div>
  </div>
  )
}

export default Login
