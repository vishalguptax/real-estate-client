import * as Yup from "yup"

export const LoginSchema =Yup.object().shape({
    email:Yup.string()
        .email("Please enter a valid email")
        .required("Please enter your email"),

    password:Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please enter your password")

})