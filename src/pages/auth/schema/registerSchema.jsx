import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup.string().min(2).max(25).required("Please enter your name"),
  email: yup
    .string()
    .email("Enter your email")

    .matches(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/, "Please enter a valid email")
    // .matches(/^(?=.*[a-z])/,
    // .matches(),

    .required("Required"),
  password: yup
    .string()
    .min(5, "Minimum 5 character")
    .matches(/^(?=.*[a-z])/, "ONE lower CASE")
    .matches(/^(?=.*[A-Z])/, "One CAPITAL case")
    .matches(/^(?=.*[0-9])/, "One number")
    .matches(/^(?=.*[!@#$%^&*])/, "One special character")
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
