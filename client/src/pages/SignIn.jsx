import axios from "axios";
import { useContext, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const {isLoggedIn, setLogIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:8000/api/users/login", {
      email: formData.email,
      password: formData.password
    })
    console.log(res);
    if(res.status == 200){
      navigate("/user/dashboard")
      setLogIn(true);
    } 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://i.postimg.cc/XYBW4NxY/login.png)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Login
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to login your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                >
                  {/* <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    id="login"
                  >
                    <path
                      d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                    <path
                      d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"
                      fill="#ffffff"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don&apos;t have an account?{" "}
                  <a href="">
                    <Link to="/signup">
                      <span className="text-blue-900 font-semibold">
                        Sign Up
                      </span>
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
