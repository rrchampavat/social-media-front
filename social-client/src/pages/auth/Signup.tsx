import { useState } from "react";
import { Box, CardActions, CardContent, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import appTheme from "../../utils/theme";
import CustomButton from "../../components/CustomButton";
import { useFormik } from "formik";
import {
  emailSignupSchema,
  phoneSignupSchema,
} from "../../utils/validationSchemas";
import { useCookies } from "react-cookie";
import CustomTextField from "../../components/DialogBox/CustomTextField";

const formInitialState = {
  emailOrPhone: "",
  fullName: "",
  userName: "",
  password: "",
};

interface FormValues {
  emailOrPhone: string | number;
  userName: string;
  password: string;
  fullName: string;
}

// const tempUser = createUser();

const Signup = () => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies(["user"]);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);

  const handleSignup = (values: FormValues) => {
    console.log(values);
    navigate("/");
    setCookies("user", JSON.stringify(values), { path: "/" });
  };

  const checkInput = (value: string) => {
    const phoneRegex = /\d/g;
    const isValidPhone = phoneRegex.test(value);
    setIsPhone(isValidPhone);
  };

  const formik = useFormik({
    initialValues: formInitialState,
    validationSchema: isPhone ? phoneSignupSchema : emailSignupSchema,
    onSubmit: (values) => handleSignup(values),
  });

  const { handleSubmit, handleChange, values, touched, handleBlur, errors } =
    formik;

  return (
    <Box
      sx={{
        bgcolor: appTheme.palette.primary.contrastText,
        height: "100%",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: {
          x: `1px solid ${appTheme.palette.primary.dark}`,
          md: "none",
        },
      }}
    >
      <Box sx={{ width: { xs: "90%", md: "80%" } }}>
        <form onSubmit={handleSubmit}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              fontFamily="Inter, 'system-ui', 'sans-serif'"
              sx={{
                color: appTheme.palette.primary.dark,
                textTransform: "uppercase",
              }}
            >
              Signup
            </Typography>

            <Typography
              fontWeight="bold"
              fontFamily="Inter, 'system-ui', 'sans-serif'"
              mt={1}
              sx={{
                color: appTheme.palette.primary.dark,
                textTransform: "uppercase",
                display: { xs: "none", md: "block" },
              }}
            >
              Sign up to see photos and videos from your friends.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomTextField
              label="Email address or phone number"
              type="text"
              name="emailOrPhone"
              value={values.emailOrPhone}
              onChange={handleChange}
              onKeyUp={() => checkInput(values.emailOrPhone)}
              onBlur={handleBlur}
              showError={touched.emailOrPhone && Boolean(errors.emailOrPhone)}
              showEndAdornment={
                Boolean(touched.emailOrPhone) && Boolean(errors.emailOrPhone)
              }
              endAdornmentItem={<InfoOutlinedIcon />}
              hasTooltip={true}
              tooltipPlacement="right"
              tooltipMsg={
                touched.emailOrPhone && errors.emailOrPhone
                  ? errors.emailOrPhone
                  : null
              }
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              endAdornmentItemColor={appTheme.palette.secondary.main}
            />
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomTextField
              label="Full name"
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onKeyUp={() => checkInput(values.fullName)}
              onBlur={handleBlur}
              showError={touched.fullName && Boolean(errors.fullName)}
              showEndAdornment={
                Boolean(touched.fullName) && Boolean(errors.fullName)
              }
              endAdornmentItem={<InfoOutlinedIcon />}
              hasTooltip={true}
              tooltipPlacement="right"
              tooltipMsg={
                touched.fullName && errors.fullName ? errors.fullName : null
              }
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              endAdornmentItemColor={appTheme.palette.secondary.main}
            />
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomTextField
              label="User name"
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onKeyUp={() => checkInput(values.userName)}
              onBlur={handleBlur}
              showError={touched.userName && Boolean(errors.userName)}
              showEndAdornment={
                Boolean(touched.userName) && Boolean(errors.userName)
              }
              endAdornmentItem={<InfoOutlinedIcon />}
              hasTooltip={true}
              tooltipPlacement="right"
              tooltipMsg={
                touched.userName && errors.userName ? errors.userName : null
              }
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              endAdornmentItemColor={appTheme.palette.secondary.main}
            />
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomTextField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onEndAdornmentClick={() => setShowPassword(!showPassword)}
              showError={touched.password && Boolean(errors.password)}
              showEndAdornment={true}
              endAdornmentItem={
                showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )
              }
              hasTooltip={true}
              tooltipPlacement="right"
              helperText={
                touched.password && errors.password ? errors.password : null
              }
              endAdornmentPosition="end"
              endAdornmentItemColor={appTheme.palette.primary.dark}
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
            />
          </CardContent>

          <CardActions sx={{ justifyContent: "center" }}>
            <CustomButton
              type="submit"
              label="Sign up"
              variant="contained"
              sx={{
                backgroundColor: appTheme.palette.primary.dark,
                // ":hover": {
                //   boxShadow: `10px 10px 0px ${appTheme.palette.primary.light}`,
                //   top: "-5px",
                //   left: "-5px",
                // },
              }}
            />
          </CardActions>

          <CardActions sx={{ justifyContent: "flex-end", mt: 6 }}>
            <Typography variant="body2" mr={1}>
              Already have an account ?
            </Typography>
            <Link
              fontSize={14}
              sx={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => navigate("/auth/login")}
            >
              Login
            </Link>
          </CardActions>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
