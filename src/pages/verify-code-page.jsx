import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiClock, FiShare2 } from "react-icons/fi";
import toast from "react-hot-toast";
import Header from "../components/header";
import verifyArt from "../assets/image-51.png";
import "./auth-pages.css";

const otpLength = 6;

function VerifyCodePage() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [otpValues, setOtpValues] = useState(Array(otpLength).fill(""));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const next = [...otpValues];
    next[index] = value;
    setOtpValues(next);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onOtpKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onResendCode = () => {
    setTimeLeft(45);
    setOtpValues(Array(otpLength).fill(""));
    inputRefs.current[0]?.focus();
    toast.success("New code sent");
  };

  const onSubmitOtp = (event) => {
    event.preventDefault();
    const codeValue = otpValues.join("");

    if (codeValue.length !== otpLength) {
      toast.error("Please enter full code");
      return;
    }

    toast.success("Account verified");
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
                <h1>Create an account</h1>
                <p>Let&apos;s create your account</p>
                <div className="auth-left__illustration">
                  <img src={verifyArt} alt="SMS verification illustration" />
                </div>
                <p className="auth-left__switch">
                  Already a member? <Link to="/login">Log In</Link>
                </p>
              </section>

              <section className="auth-right auth-right--verify">
                <h2>We just sent an SMS</h2>
                <div className="auth-verify-head">
                  <p>
                    Enter the security code we sent to
                    <br />
                    +32 123456789
                  </p>
                  <Link to="/signup">Edit</Link>
                </div>

                <form onSubmit={onSubmitOtp}>
                  <div className="auth-otp-fields">
                    {otpValues.map((item, index) => (
                      <input
                        key={`otp-${index}`}
                        ref={(element) => {
                          inputRefs.current[index] = element;
                        }}
                        value={item}
                        onChange={(event) => onOtpChange(index, event.target.value)}
                        onKeyDown={(event) => onOtpKeyDown(event, index)}
                        maxLength={1}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                      />
                    ))}
                  </div>

                  <div className="auth-verify-meta">
                    <p>
                      Didn&apos;t get the code?{" "}
                      <button type="button" onClick={onResendCode} disabled={timeLeft > 0}>
                        Resend it
                      </button>
                    </p>
                    <span>
                      <FiClock />
                      {`${timeLeft}s`}
                    </span>
                  </div>

                  <button className="auth-submit" type="submit">
                    Submit
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerifyCodePage;
