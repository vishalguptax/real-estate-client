

import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup.string().min(2).max(25).required("Please enter your name"),
  email: yup
    .string()
    .email("Enter your email")
    .matches(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)
    // .matches(/^(?=.*[a-z])/,
    // .matches(),
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(/^(?=.*[a-z])/, "MUST CONTAIN ONE lower CASE")
    .matches(/^(?=.*[A-Z])/, "Must contain one CAPITAL case")
    .matches(/^(?=.*[0-9])/, "Must contain one number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must contain one special character")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
    mobileNumber: yup
      .string()
      .matches(/^\d{10}$/, "Should be exactly 10 digits")
      .required("Invalid Mobile Number"),
  });

export default RegisterSchema;