import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./LoginSignUp.css";
import { SignUp, login, logout } from "../../lib/pocketbase/auth/auth";
import toast, { Toaster } from "react-hot-toast";

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginValues.email || !emailRegex.test(loginValues.email)) {
      toast.error("Lütfen Geçerli Bir E-Posta Adresi Giriniz!");
      // toast("Lütfen geçerli bir e-posta adresi giriniz!", {
      //   duration: 6000,
      // });
      return;
    }
    login(loginValues.email, loginValues.password);
    // setLoginValues({
    //   email: "",
    //   password: "",
    // });
  };
  const handleSignUp = () => {
    SignUp(signUpValues)
      .then(() => {
        SetAction("Login");
      })
      .finally(() => {
        setSignUpValues({
          username: "",
          email: "",
          password: "",
          passwordConfirm: "",
          name: "",
        });
      });
  };
  const passwordVisible = () => {
    setVisible(!visible);
  };

  const handleSignUpClick = () => {
    SetAction("Sign Up");
    setLoginValues({
      email: "",
      password: "",
    });
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
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <button
        className="bg-yellow-500 p-2 rounded-xl hover:bg-blue-500"
        onClick={handleLogout}
      >
        log out
      </button>
      <Toaster position="top-right" />
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
                <button className="pass-show" onClick={passwordVisible}>
                  {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              <div className="under-text">
                If you don't have an account!{" "}
                <span
                  onClick={() => {
                    SetAction("Sign Up");
                  }}
                >
                  Click Here!
                </span>
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
                <button className="pass-show" onClick={passwordVisible}>
                  {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
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
            <button
              className={action === "Login" ? "submit color-gray" : "submit"}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button
              className={action === "Sign Up" ? "submit color-gray" : "submit"}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
