
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold my-auto bg-gradient-to-r from-pink-300 to-pink-700 bg-clip-text text-transparent">Welcome Home</h2>
      <div className="w-full p-2 m-1 mt-4 text-center bg-pink-500 border rounded-md text-white font-sans cursor-pointer">
        <Link to="/login-register">Login Register</Link>
      </div>
    </div>
  );
};

export default Home;
