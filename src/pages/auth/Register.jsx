import { useFormik } from "formik";
import RegisterSchema from "./schema/registerSchema";

const onSubmit = (values, actions) => {
  console.log("Form data: ", values);
  localStorage.setItem("user", JSON.stringify(values));
  actions.resetForm();
  alert("Account created successfully!");
};

const Register = () => {
  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
    },
    onSubmit,
    validationSchema: RegisterSchema,
  });

  return (
    <>
      <div
        className=" w-[216vh]  h-screen flex justify-center p-12
        bg-[url(https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
        bg-cover bg-center 
       bg-no-repeat"
      >
        <div className="w-full max-w-md bg-gray-800/60 p-3  rounded-lg shadow-lg h-fit">
          <h1 className="text-center text-white text-2xl font-bold my-2">
            Register!
          </h1>
          <form
            className=" flex flex-col"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className=" flex flex-col p-0.5 gap-0.5 ">
              <label className="text-white block font-medium" htmlFor="name">
                Name
              </label>
              <input
                className={`w-full p-2 rounded-lg bg-gray-700 text-white border ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                // className= {errors.name && touched.name ? 'input-error':""}
                id="name"
                type="name"
                placeholder="Your name?"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm">{errors.name} </p>
              )}
            </div>

            <div className=" flex flex-col p-0.5 gap-0.5">
              <label className="text-white block font-medium" htmlFor="email">
                Email
              </label>
              <input
                className={`bg-gray-700 w-full rounded-lg p-2 border text-white ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="email"
                type="email"
                placeholder="Please enter your email..."
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email} </p>
              )}
            </div>

            <div className=" flex p-0.5 gap-0.5 flex-col ">
              <label
                className="font-medium block text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`bg-gray-700 w-full p-2 rounded-lg border text-white ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="password"
                type="password"
                placeholder="Please enter password..."
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.password && touched.password && (
                <p className="text-red-500">{errors.password} </p>
              )}
            </div>

            <div className=" flex p-0.5 gap-0.5 flex-col">
              <label
                className="font-medium block text-white"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={`rounded-lg border text-white p-2 w-full bg-gray-700 ${
                  console.error.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                };
                  }`}
                id="confirmPassword"
                type="password"
                placeholder="Please enter password..."
                value={values.confirmPassword}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword} </p>
              )}
            </div>

            <div className=" flex p-0.5 gap-0.5 flex-col">
              <label
                className="font-medium block text-white"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                className={`bg-gray-700 p-2 w-full border text-white rounded-lg ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
                id="mobileNumber"
                type="tel"
                placeholder="Your mobile number..."
                value={values.mobileNumber}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.mobileNumber && touched.mobileNumber && (
                <p className="text-red-500">{errors.mobileNumber} </p>
              )}

              <button
                className="w-full my-3 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                type="submit"
              >
                Register!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
