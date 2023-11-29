import { useState, useEffect, useCallback } from "react";
import "./App.scss";
import Icons from "./components/icons";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = useCallback(() => {
    let valid = true;

    // Name validation
    if (formData.name.trim().length < 4 || formData.name.length > 20) {
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      valid = false;
    }

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[@$!%*?&]/;

    if (
      !uppercaseRegex.test(formData.password) ||
      !digitRegex.test(formData.password) ||
      !symbolRegex.test(formData.password) ||
      formData.password.length < 8
    ) {
      valid = false;
    }

    return valid;
  }, [formData.name, formData.email, formData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  useEffect(() => {
    if (validateForm()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [validateForm]);

  return (
    <div className="App">
      <div className="register">
        <div className="left">
          <div className="logo">
            <img
              src="/icon.svg"
              className="icon"
              width={"100px"}
              height={"20px"}
              alt="logo"
            />
          </div>
          <div className="hero-text">
            <h1 className="title">Welcome Back!</h1>
            <p className="text">
              To keep connected with us please login with your personal info
            </p>
            <button className="btn">Sign In</button>
          </div>
        </div>
        <div className="right">
          <div className="logo">
            <Icons name="logo" width={"100px"} height={"35px"} />
          </div>
          <div className="container">
            <h1 className="title">Create Account</h1>
            <div className="social-sign-on">
              <Icons name="facebook" width="20px" height="20px" />
              <Icons name="google-plus" width="20px" height="20px" />
              <Icons name="linkedin" width="25px" height="25px" />
            </div>
            <div className="rnd-text">Or use your email for registration</div>
            <form className="data-form" onSubmit={handleSubmit}>
              <div className="username">
                <div className="icon">
                  <Icons name="profile" width={"20px"} height={"20px"} />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>
              <div className="email">
                <div className="icon">
                  <Icons name="email" width={"20px"} height={"20px"} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div className="password">
                <div className="icon">
                  <Icons name="password" width={"16px"} height={"16px"} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>

              <button
                className={isValid ? "btn" : "btn-not-allowed"}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
