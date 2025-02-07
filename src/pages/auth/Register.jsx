import { useState } from "react";
import { useFormik } from "formik";
import RegisterSchema from "./schema/registerSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const onSubmit = (values, actions) => {
  console.log("Form data: ", values);
  localStorage.setItem("user", JSON.stringify(values));
  actions.resetForm();
  alert("Account created successfully!");
};

const initialValues = {
  name: "",
  email: "",
  countryCode: "",
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
    <>
      <div className="image-bg">
        <div className="register-form">
          <h1 className="register-heading">Register!</h1>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="register-div-input">
              <label className="register-label" htmlFor="name">
                Name
              </label>
              <input
                className={`register-input ${
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
              <label className="register-label" htmlFor="email">
                Email
              </label>
              <input
                className={`register-input ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="email"
                type="email"
                placeholder="Please enter your email..."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="register-div-input">
              <label className="register-label" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <div className="flex gap-1">
                <input
                  id="countryCode"
                  // type="text"
                  className="register-input flex-1/9"
                  value="+91"
                />
                <input
                  className={`register-input ${
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
            </div>

            <div className="flex gap-1">
              <div className="register-div-input flex-1/2">
                <label className="register-label" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    className={`register-input ${
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
                    className="absolute right-2 top-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                  <FontAwesomeIcon icon="fa-regular fa-house" />
                    {/* <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                    /> */}
                  </i>
                </div>
                {errors.password && touched.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>

              <div className="register-div-input flex-1/2">
                <label className="register-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className={`register-input ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                    id="confirmPassword"
                    type={confirmPasswordVisible ? "text" : "password"}
                    placeholder="confirm password..."
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <i
                    className="absolute right-2 top-3 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {/* <FontAwesomeIcon
                      icon={confirmPasswordVisible ? faEyeSlash : faEye}
                    /> */}
                  </i>
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* <p className="text-white m-2">
              By signing up, you agree to our Terms of use and Privacy Policy.
            </p> */}
            <button className="register-button" type="submit">
              Register!
            </button>
            <p className="text-white">Already have an account? Sign In</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
