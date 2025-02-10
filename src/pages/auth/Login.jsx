import  { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "./schema/loginSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const { values,errors,touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:LoginSchema,

    onSubmit: (values) => {
      
      let getDetails = [];
      getDetails = JSON.parse(localStorage.getItem("users")|| "[]");
      let loginSuccessful = false;

      for(let i=0; i< getDetails.length; i++){
        let verifyVal = getDetails[i];
        if(verifyVal.email === values.email && verifyVal.password ===values.password){
          localStorage.setItem("loggedInUser",JSON.stringify(verifyVal))
          navigate("/")
          alert("login successful")
          break;
        }
        if(!loginSuccessful) {
          alert("password invalid")
        }
      }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <div className="isolate aspect-video w-96 rounded-xl bg-white/20  ring-2 shadow-xl ring-black/20 p-4">
            <h1 className="text-center p-4">User Login</h1>
            <div className="flex flex-col justify-center items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter email id"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4 
                ${errors.email && touched.email? "border-red-500" : "dark:border-gray-600 "}`}
                onChange={handleChange}
                value={values.email}
              />
              
              <div className="">
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email} </p>
              )}
              </div>
              <div className=" w-full relative">

              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="password"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4
                ${errors.email && touched.email? "border-red-500" : "dark:border-gray-600 "}`}
                onChange={handleChange}
                value={values.password}
              />
              <i
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
              </i>
              <div className="">
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm">{errors.password} </p>
              )}
              </div>
              </div>

              <button
                type="submit"
                className="login-button m-4"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;