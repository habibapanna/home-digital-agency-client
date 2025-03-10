import { Link, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await loginUser(formData.email, formData.password);

      // Show success alert
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        confirmButtonColor: "#6878d6",
      }).then(() => {
        navigate("/"); // Redirect after clicking "OK"
      });
    } catch (err) {
      setError(err.message);

      // Show error alert
      Swal.fire({
        title: "Login Failed!",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      // Show success alert
      Swal.fire({
        title: "Google Login Successful!",
        text: "You're logged in with Google.",
        icon: "success",
        confirmButtonColor: "#6878d6",
      }).then(() => {
        navigate("/"); // Redirect after clicking "OK"
      });
    } catch (err) {
      setError(err.message);

      // Show error alert
      Swal.fire({
        title: "Google Login Failed!",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#eff2ff]">
      <div>
        <div className="hero">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-[#242a56]">Login now!</h1>
            </div>
            <div className="bg-white w-full max-w-sm shrink-0 shadow-lg">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="fieldset-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="btn text-white mt-4 bg-[#6878d6] hover:bg-blue-800">
                      Login
                    </button>
                  </fieldset>
                </form>
                <p className="text-red-500">
                  Don't have an account?
                  <Link to="/register" className="text-blue-500 ml-1">
                    Register
                  </Link>
                </p>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white border border-blue-500 mt-5 mb-5 hover:text-[#6878d6] text-gray-700 flex items-center"
                >
                  <FcGoogle className="text-xl mr-2" />
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};

export default Login;
