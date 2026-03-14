import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiEye, FiEyeOff, FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import Header from "../components/header";
import signupArt from "../assets/image-48.png";
import "./auth-pages.css";

function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!formValues.fullName || !formValues.email || !formValues.password) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Security code sent");
    navigate("/signup/verify");
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
                <h1>Create an account</h1>
                <p>Let&apos;s create your account</p>
                <div className="auth-left__illustration">
                  <img src={signupArt} alt="Sign up illustration" />
                </div>
                <p className="auth-left__switch">
                  Already a member? <Link to="/login">Log In</Link>
                </p>
              </section>

              <section className="auth-right">
                <form className="auth-form" onSubmit={onSubmitForm}>
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    type="text"
                    value={formValues.fullName}
                    placeholder="Enter your full name"
                    onChange={(event) =>
                      setFormValues((prev) => ({ ...prev, fullName: event.target.value }))
                    }
                  />

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
                    Sign Up
                  </button>
                </form>

                <div className="auth-divider">
                  <span>Or</span>
                </div>

                <button type="button" className="auth-social auth-social--google">
                  <FaGoogle />
                  <span>Sign Up with Google</span>
                </button>
                <button type="button" className="auth-social auth-social--facebook">
                  <FaFacebookF />
                  <span>Sign Up with Facebook</span>
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
