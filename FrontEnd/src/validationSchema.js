import * as yup from "yup";
// import "yup-phone";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phnoRules =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const basicSchema = yup.object().shape({
  name: yup.string().max(50, "Must be 50 characters or less"),
  email: yup.string().email("Please enter a valid email"),
  // phno: yup
  //   .number()
  //   .positive()
  //   .integer()
  //   .min(1000000000, "Please enter a valid 10-digit mobile number")
  //   .max(
  //     9999999999,
  //     "Please enter a valid 10-digit mobile number. Only Indian mobile numbers are accepted."
  //   ),
  phno: yup.string().length(10, "Please enter a 10-digit valid phone number"),
  // phno: yup
  //   .string()
  //   .matches(phnoRules, { message: "Please enter a valid Phone Number" }),
  product: yup
    .string()
    .max(100, "Please enter the products name within 100 characters"),
  city: yup.string().max(45, "Please enter city names within 45 characters"),
  country: yup
    .string()
    .max(45, "Please enter country names within 45 characters"),
  remarks: yup.string(),
  expiry: yup.string(),
  //   password: yup
  //     .string()
  //     .min(5)
  //     .matches(passwordRules, { message: "Please create a stronger password" })
  //     .required("Required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Passwords must match")
  //     .required("Required"),
});

export const strictSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phno: yup
    .number()
    .positive()
    .integer()
    .required("Required")
    .min(1000000000, "Please enter a valid 10-digit mobile number")
    .max(
      9999999999,
      "Please enter a valid 10-digit mobile number. Only Indian mobile numbers are accepted."
    ),
  product: yup
    .string()
    .max(100, "Please enter the products name within 100 characters")
    .required("Required"),
  city: yup
    .string()
    .max(45, "Please enter city names within 45 characters")
    .required("Required"),
  country: yup
    .string()
    .max(45, "Please enter country names within 45 characters")
    .required("Required"),
  remarks: yup.string(),
  expiry: yup.string().required("Required"),
});
