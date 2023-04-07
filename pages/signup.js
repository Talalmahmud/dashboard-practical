import Link from "next/link";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the phone number is from Bangladesh
    const isPhoneNumberValid = /^(\+?880|0)1[13456789][0-9]{8}$/.test(
      phoneNumber
    );
    if (!isPhoneNumberValid) {
      alert("Please enter a valid Bangladesh phone number.");
      return;
    }
    // Perform login with phone number and password
    console.log(
      `Logging in with phone number ${phoneNumber} and password ${password}...`
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-0 right-0 mt-3 mr-4"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <div>
              Already have an account?{" "}
              <Link
                href="/login"
                className=" text-blue-500 hover:bg-blue-300 text-sm hover:text-white underline font-bold py-2 px-2 rounded "
              >
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
