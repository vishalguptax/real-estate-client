import { useState } from "react";
import { useFormik } from "formik";
import RegisterSchema from "./schema/registerSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const onSubmit = (values, actions) => {
  console.log("Form data: ", values);
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  existingUsers.push(values);

  localStorage.setItem("users", JSON.stringify(existingUsers));
  actions.resetForm();
  alert("Account created successfully!");
};

const initialValues = {
  name: "",
  email: "",
  countryCode: "+91",
  mobileNumber: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: RegisterSchema,
    });

  return (
    <div className="image-bg2">
      <form
        className="border-amber-400 p-4"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="login-form">
          <h1 className="login-heading">Sign Up</h1>
          <div className="register-div-input">
            <input
              className={`login-input ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              id="name"
              type="text"
              placeholder="Your name?"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="error-message">{errors.name}</p>
            )}
          </div>

          <div className="register-div-input">
            <input
              className={`login-input ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>

          <div className="flex gap-2">
            <input
              id="countryCode"
              className="w-10 text-center"
              value={values.countryCode}
              readOnly
            />
            <input
              className={`login-input ${
                errors.mobileNumber && touched.mobileNumber
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              id="mobileNumber"
              type="tel"
              placeholder="Your mobile number..."
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.mobileNumber && touched.mobileNumber && (
            <p className="error-message">{errors.mobileNumber}</p>
          )}

          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                className={`login-input ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Please enter password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <i
                className="absolute right-2 top-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </i>
              {errors.password && touched.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div className="relative flex-1">
              <input
                className={`login-input ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm password..."
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <i
                className="absolute right-2 top-5 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                />
              </i>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button className="login-button mr-2 mb-2" type="submit">
            Sign Up!
          </button>
          <p className="text-white">
            Already have an account?
            <Link to="/Login" className="hover:text-black">
              {" "}
              Sign In{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
