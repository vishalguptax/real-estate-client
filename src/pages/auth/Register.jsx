import { useState } from "react";
import { useFormik } from "formik";
import RegisterSchema from "./schema/registerSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  countryCode: "+91",
  mobileNumber: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (values, actions) => {
    console.log("Form data: ", values);
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(values);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    actions.resetForm();
    alert("Account created successfully!");
    navigate("/Login");
  };
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
    <div className="form-bg">
      <div className=" max-h-[90vh] my-10 overflow-auto custom-scrollbar flex justify-center w-[80%] ml-auto mr-auto max-w-md bg-white/20 shadow-xl rounded-lg ring-2 ring-black/20">
        <form
          className="w-full  p-5"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h1 className="text-center text-2xl font-bold text-black m-4">
            Sign Up
          </h1>
          <div className=" m-3">
            <div className="register-div-input">
              <input
                className={`form-input ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                name="name"
                type="text"
                placeholder="Name..."
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
                className={`form-input ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                name="email"
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

            <div className="register-div-input">
              <input
                className={`form-input ${
                  errors.mobileNumber && touched.mobileNumber
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                name="mobileNumber"
                type="tel"
                placeholder="Mobile number"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobileNumber && touched.mobileNumber && (
                <p className="error-message">{errors.mobileNumber}</p>
              )}
            </div>

            <div className="sm:flex-row md:gap-8 md:flex">
              <div className="relative register-div-input">
                <input
                  className={`form-input ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-500"
                  }`}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter password..."
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i className="eye-icon" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </i>
                {errors.password && touched.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>

              <div className="relative register-div-input">
                <input
                  className={`form-input ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500"
                      : "border-gray-500"
                  }`}
                  name="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm password..."
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <i
                  className="eye-icon"
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

            <button className="form-button" type="submit">
              Sign Up!
            </button>

            <p className="text-black text-center mt-3">
              Already have an account?
              <Link to="/Login" className="font-bold hover:text-xl">
                {" "}
                Sign In{"  "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
