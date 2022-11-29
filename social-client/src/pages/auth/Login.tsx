import React, { useState } from "react";
import {
  Box,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import appTheme from "../../utils/theme";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/validationSchemas";

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
  const [cookies, setCookies] = useCookies(["user"]);

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
            <TextField
              variant="standard"
              name="emailOrPhone"
              type="text"
              label="Username, email or mobile no."
              fullWidth
              value={values.emailOrPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.emailOrPhone && Boolean(errors.emailOrPhone)}
              helperText={touched.emailOrPhone && errors.emailOrPhone}
              sx={{
                bgcolor: appTheme.palette.primary.contrastText,
                borderRadius: "4.2px 4.2px 0px 0px",
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
            />
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControl
              variant="standard"
              fullWidth
              error={touched.password && Boolean(errors.password)}
              sx={{
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>

              <Input
                type={showPassword ? "text" : "password"}
                // value={values.password}
                onChange={handleChange}
                name="password"
                value={values.password}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText sx={{ color: "red" }}>
                {touched.password && errors.password}
              </FormHelperText>
            </FormControl>
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
