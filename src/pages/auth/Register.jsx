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
    <div className="image-bg">
      <div className="max-h-[90vh] overflow-auto w-full flex justify-center">
        <form
          className="border-amber-400 p-4 w-full max-w-md bg-white/20 shadow-xl rounded-xl ring-2 ring-black/20"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h1 className="text-center text-2xl font-bold text-white mb-4">
            Sign Up
          </h1>

          <div className="register-div-input">
            <input
              className={`login-input ${
                errors.name && touched.name ? "border-red-500" : "border-gray-500"
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

          <div className="flex flex-col md:flex-row gap-2">
            <input
              className={`login-input flex-1 ${
                errors.mobileNumber && touched.mobileNumber
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              id="mobileNumber"
              type="tel"
              placeholder="Mobile number"
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.mobileNumber && touched.mobileNumber && (
            <p className="error-message">{errors.mobileNumber}</p>
          )}

          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <input
                className={`login-input ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <i
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </i>
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
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                />
              </i>
            </div>
          </div>
          {errors.password && touched.password && (
            <p className="error-message">{errors.password}</p>
          )}
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}

          <button className="login-button mx-auto block mt-4" type="submit">
            Sign Up!
          </button>

          <p className="text-white text-center mt-3">
            Already have an account?
            <Link to="/Login" className="hover:text-black">
              {" "}
              Sign In{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
