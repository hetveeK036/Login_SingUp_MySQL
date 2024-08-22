import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginRegister = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();
  // ------ Register -------
  const register = (e) => {
    e.preventDefault();
    // axios.post('http://localhost:8081/register', { username, email, password })

    axios
      .post("http://localhost:3000/register", { username, email, password })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log("error  = ", err));

    console.log("click on register");
  };

  // ------ Login -------

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", values)

      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/home");
        } else {
          alert(res.data.Error);
        }
        console.log("login page : ", res);
      })
      .catch((err) => console.log("error  = ", err));
      setValues('')
    console.log("click on Login");
  };

  return (
    <div
      className="bg-white m-auto relative overflow-hidden min-h-96 p-10 rounded-[40px] w-1/2 border-2 border-pink-500 shadow-lg top-56 "
      id="content">
      {/* ********************** Register Form **************** */}
      <div
        className={`m-5 w-2/5 text-center float-right  ${
          isRegisterActive ? "translate-x-0" : "translate-x-[10%]"
        }`}
      >
        <form onSubmit={register} className="">
          <div className="my-10">
            <h2 className="text-center text-3xl text-pink-500 font-bold  tracking-tight ">
              Create Account
            </h2>
          </div>
          <div className="flex flex-col mb-3 justify-center">
            <div>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                required
                className=" w-4/5 p-2 mb-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" w-4/5 p-2 mb-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className=" w-4/5 p-2 mb-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-7">
              <button
                type="submit"
                id="registerBtn"
                className=" w-3/5 m-3 p-2 rounded-[0px_20px] border-white text-white text-xl font-thin tracking-wider  bg-pink-600 hover:bg-gradient-to-r from-pink-300 to-pink-700">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* ************ login Page ****************** */}
      <div
        className={`m-5 w-2/5 text-center float-left  ${
          isRegisterActive ? "translate-x-[10%]" : "translate-x-0"
        }`} > 
        <form onSubmit={login} className="">
          <div className="my-10">
            <h2 className="text-center text-3xl text-pink-500 font-bold  tracking-tight ">
              Login
            </h2>
          </div>
          <div className="flex flex-col mb-3 justify-center">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                required
                className=" w-4/5 p-2 mb-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                required
                className="w-4/5 p-2 mb-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex justify-evenly">
              <div>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="hover:cursor-pointer "
                />
                <label className="text-gray-500 ml-2">Remember me</label>
              </div>
              <div>
                <a href="#" className=" text-pink-500 underline font-medium">
                  {" "}
                  Forget Password?
                </a>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                id="LoginBtn"
                className=" w-3/5 m-3 p-2 rounded-[0px_20px] border-white text-white text-xl font-thin tracking-wider  bg-pink-600 hover:bg-gradient-to-r from-pink-300 to-pink-700" >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* ------------ Switch penal ---------- */}
      <div
        className={`switch-content absolute top-0 right-[50%] w-1/2 h-full bg-pink-500 p-2 text-white overflow-hidden z-50 transition-all duration-200 ease-in-out  ${
          isRegisterActive
            ? "translate-x-0 rounded-[40px_0px_0px_40px] "
            : "translate-x-full rounded-[0_40px_40px_0]"
        } `} >
        <div className="switch h-full relative transform translateX(0) transition-all ease-in-out duration-100 active:translateX[50%] ">
          {isRegisterActive ? (
            <div className="switch-penal float-left absolute text-center py-7 w-full h-full top-0 flex flex-col justify-center transform translate-x-0:translate-x-[-200%] transition-all ease-in-out active:translate-x-0 ">
              <h1 className="text-2xl mb-4 uppercase text-center">
                Hello Again !
              </h1>
              <p className="text-xl mb-4 font-sans">
                We are happy to see you again{" "}
              </p>
              <div>
                <button
                  id="login"
                  onClick={() => setIsRegisterActive(!isRegisterActive)}
                  className="w-1/3 m-3 p-2 rounded-[20px_5px] text-pink-600 items-center text-xl font-thin  tracking-wider bg-white hover:font-semibold hover:bg-transparent hover:text-white hover:border-solid hover:border-b-2 hover:border-r-2 hover:border-white " >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div className="switch-penal float-right absolute text-center w-full py-7  h-full  flex flex-col justify-center transform translate-X-0 active:translate-X-[200%] transition-all ease-in-out ">
              <h1 className="text-3xl uppercase mb-4">Welcome</h1>
              <p className="text-xl mb-4 font-sans">
                Join our Platform, Explore new Experience
              </p>
              <div>
                <button
                  id="register"
                  onClick={() => setIsRegisterActive(!isRegisterActive)}
                  className="w-1/3 m-3 p-2 rounded-[20px_5px] text-pink-600 tracking-* text-xl font-thin items-center bg-white hover:bg-transparent hover:text-white hover:border-solid hover:border-b-2 hover:border-white hover:border-r-2">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
