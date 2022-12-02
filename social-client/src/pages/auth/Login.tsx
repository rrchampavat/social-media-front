import { useState } from "react";
import { Box, CardActions, CardContent, Link, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import appTheme from "../../utils/theme";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/validationSchemas";
import CustomTextField from "../../components/DialogBox/CustomTextField";

const formInitialState = {
  emailOrPhone: "",
  password: "",
};

interface FormValues {
  emailOrPhone: string | number;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies(["user"]);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (values: FormValues) => {
    setCookies("user", JSON.stringify(values), { path: "/" });
  };

  const formik = useFormik({
    initialValues: formInitialState,
    validationSchema: loginSchema,
    onSubmit: (values: FormValues) => handleLogin(values),
  });

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
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
      }}
    >
      <Box sx={{ width: { xs: "90%", md: "80%" } }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
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
            Login
          </Typography>
        </CardContent>

        <form onSubmit={handleSubmit}>
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
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              endAdornmentItemColor={appTheme.palette.primary.dark}
            />
          </CardContent>

          <CardActions sx={{ justifyContent: "center" }}>
            <CustomButton
              label="Login"
              variant="contained"
              type="submit"
              sx={{ backgroundColor: appTheme.palette.primary.dark }}
            />
          </CardActions>
        </form>

        <CardActions sx={{ justifyContent: "flex-end", mt: 10 }}>
          <Typography variant="body2" mr={1}>
            Don't have an account ?
          </Typography>
          <Link
            fontSize={14}
            sx={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </Link>
        </CardActions>
      </Box>
    </Box>
  );
};

export default Login;
