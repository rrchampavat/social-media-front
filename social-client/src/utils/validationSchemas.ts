import * as Yup from "yup";

const baseSignUpSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(4, "Full Name must be atleast 4 characters long")
    .max(16, "Full name can consist more than 16 characters"),
  userName: Yup.string()
    .required("User name is required")
    .min(3, "User name must be atleast 3 characters long")
    .max(16, "User name can consist more than 16 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters long")
    .matches(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/g,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    ),
});

export const emailSignupSchema = baseSignUpSchema.concat(
  Yup.object({
    emailOrPhone: Yup.string()
      .email("Please enter valid email address")
      .required("Email or Phone number is required"),
  })
);

export const phoneSignupSchema = baseSignUpSchema.concat(
  Yup.object({
    emailOrPhone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number has to be 10 digits")
      .required("Email or Phone number is required"),
  })
);

export const loginSchema = Yup.object({
  userName: Yup.string().required("Email or phone required"),
  password: Yup.string().required("Password is required"),
});
