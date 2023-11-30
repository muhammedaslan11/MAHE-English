import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./LoginSignUp.css";
import { SignUp, login } from "../../lib/pocketbase/auth/auth";

const LoginSignUp = () => {
  const [visible, setVisible] = useState(false);
  const [action, SetAction] = useState("Login");
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const [signUpValues, setSignUpValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });

  const handleLogin = () => {
    login(loginValues.email, loginValues.password);
    setLoginValues({
      email: "",
      password: "",
    });
  };
  const handleSignUp = () => {
    SignUp(signUpValues);
    setSignUpValues({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
    });
  };
  const passwordVisible = () => {
    setVisible(!visible);
  };

  const handleSignUpClick = () => {
    SetAction("Sign Up");
    if (
      signUpValues.username &&
      signUpValues.email &&
      signUpValues.password &&
      signUpValues.passwordConfirm &&
      signUpValues.name
    ) {
      handleSignUp();
    }
  };
  const handleLoginClick = () => {
    SetAction("Login");
    if (loginValues.email && loginValues.password) {
      handleLogin();
    }
  };
  return (
    <div className="bigcontainer shadow-xl rounded-md">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <>
            {/* ------------------------Login----------------------------------- */}
            <div className="input">
              <FaEnvelope />
              <input
                type="email"
                required
                placeholder="Email"
                value={loginValues.email}
                onChange={(e) => {
                  setLoginValues({
                    ...loginValues,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input">
              <FaLock />
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
                value={loginValues.password}
                onChange={(e) => {
                  setLoginValues({
                    ...loginValues,
                    password: e.target.value,
                  });
                }}
              />
              <div className="pass-show" onClick={passwordVisible}>
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <div
              onClick={() => {
                alert("Her Gördüğüne Tıklama!!!");
              }}
              className="forgot-password"
            >
              Lost Password?<span>Click Here!</span>
            </div>
            {/* ------------------------Login----------------------------------- */}
          </>
        ) : (
          <>
            {/* ------------------------Sign Up----------------------------------- */}
            <div className="input">
              <FaUserAlt />
              <input
                type="text"
                placeholder="User Name"
                value={signUpValues.username}
                onChange={(e) => {
                  setSignUpValues({
                    ...signUpValues,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email"
                value={signUpValues.email}
                onChange={(e) => {
                  setSignUpValues({
                    ...signUpValues,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input">
              <FaLock />
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
                value={signUpValues.password}
                onChange={(e) => {
                  setSignUpValues({
                    ...signUpValues,
                    password: e.target.value,
                  });
                }}
              />
              <div className="pass-show" onClick={passwordVisible}>
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <div className="input">
              <FaLock />
              <input
                type="password"
                placeholder="Confirm Your Password"
                value={signUpValues.passwordConfirm}
                onChange={(e) => {
                  setSignUpValues({
                    ...signUpValues,
                    passwordConfirm: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input">
              <FaUserAlt />
              <input
                type="text"
                placeholder="Display Name"
                value={signUpValues.name}
                onChange={(e) => {
                  setSignUpValues({
                    ...signUpValues,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            {/* ------------------------Sign Up----------------------------------- */}
          </>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit color-gray" : "submit"}
            onClick={handleSignUpClick}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit color-gray" : "submit"}
            onClick={handleLoginClick}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
