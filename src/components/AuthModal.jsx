import { FaTimes, FaGoogle, FaFacebook } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[380px] rounded-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 p-3 rounded-xl text-white text-xl">
            📄
          </div>
        </div>

        <h2 className="text-xl font-semibold text-center">
          Welcome to DaWaCo
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Sign in to your account
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button className="flex-1 bg-white rounded-md py-2 text-blue-600 font-medium">
            Login
          </button>
          <button className="flex-1 py-2 text-gray-600">
            Sign Up
          </button>
        </div>

        {/* Email */}
        <label className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-2 mt-1 mb-3"
        />

        {/* Password */}
        <label className="text-sm font-medium">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded-lg px-4 py-2 mt-1"
        />

        <div className="text-right text-sm text-blue-600 mt-2 cursor-pointer">
          Forgot Password?
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-semibold">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2">
            <FaFacebook /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
