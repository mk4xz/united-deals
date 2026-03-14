import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiEye, FiEyeOff, FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import Header from "../components/header";
import loginArt from "../assets/banner-secondary.png";
import "./auth-pages.css";

function LogInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!formValues.email || !formValues.password) {
      toast.error("Please enter email and password");
      return;
    }

    toast.success("Logged in successfully");
    navigate("/");
  };

  return (
    <>
      <Header />
      <section className="auth-screen page-offset">
        <div className="container">
          <div className="auth-panel">
            <div className="auth-toolbar">
              <button type="button" className="auth-toolbar__back" onClick={() => navigate(-1)}>
                <FiChevronLeft />
                <span>Back</span>
              </button>
              <button type="button" className="auth-toolbar__share" aria-label="share page">
                <FiShare2 />
              </button>
            </div>

            <div className="auth-content">
              <section className="auth-left">
                <h1>Welcome back</h1>
                <p>Log in to continue shopping</p>
                <div className="auth-left__illustration">
                  <img src={loginArt} alt="Login illustration" />
                </div>
                <p className="auth-left__switch">
                  New here? <Link to="/signup">Create account</Link>
                </p>
              </section>

              <section className="auth-right">
                <form className="auth-form" onSubmit={onSubmitForm}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formValues.email}
                    placeholder="Enter your email address"
                    onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
                  />

                  <label htmlFor="password">Password</label>
                  <div className="auth-password">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formValues.password}
                      placeholder="Enter your password"
                      onChange={(event) =>
                        setFormValues((prev) => ({ ...prev, password: event.target.value }))
                      }
                    />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <button className="auth-submit" type="submit">
                    Log In
                  </button>
                </form>

                <div className="auth-divider">
                  <span>Or</span>
                </div>

                <button type="button" className="auth-social auth-social--google">
                  <FaGoogle />
                  <span>Log In with Google</span>
                </button>
                <button type="button" className="auth-social auth-social--facebook">
                  <FaFacebookF />
                  <span>Log In with Facebook</span>
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogInPage;
