import { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "./schema/loginSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { login } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const navigate = useNavigate("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,

    onSubmit: (values) => {
      let getDetails = [];
      getDetails = JSON.parse(localStorage.getItem("users") || "[]");
      let loginSuccessful = false;

      for (let i = 0; i < getDetails.length; i++) {
        let verifyVal = getDetails[i];
        if (
          verifyVal.email === values.email &&
          verifyVal.password === values.password
        ) {
          // localStorage.setItem("loggedInUser",JSON.stringify(verifyVal))
          login(verifyVal);
          loginSuccessful = true;
          alert("login successful");
          // navigate("/")
          break;
        }
      }
      if (!loginSuccessful) {
        alert("password invalid");
      }
    },
  });

  return (
    <>
      <div className="form-bg flex items-center justify-center">
        <form onSubmit={handleSubmit} className=" max-h-fit">
          <div className="isolate aspect-video w-96 rounded-xl bg-white/20  ring-2 shadow-xl ring-black/20 p-4">
            <h1 className="text-center text-2xl font-bold text-black mb-4">
              Sign In
            </h1>
            <div className="flex flex-col justify-center items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter email id"
                className={`form-input ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "dark:border-gray-600 "
                }`}
                onChange={handleChange}
                value={values.email}
              />

              <div className="">
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email} </p>
                )}
              </div>
              <div className=" w-full relative ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className={`form-input
                ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "dark:border-gray-600 "
                }`}
                  onChange={handleChange}
                  value={values.password}
                />

                <i
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEye : faEyeSlash}
                  />
                </i>

                <div className="text-center">
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-sm">{errors.password} </p>
                  )}
                </div>
              </div>

              <button type="submit" className="form-button">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
