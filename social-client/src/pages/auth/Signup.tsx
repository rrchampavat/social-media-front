import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import appTheme from "../../utils/theme";
import CustomButton from "../../components/CustomButton";
import { useFormik } from "formik";
import {
  emailSignupSchema,
  phoneSignupSchema,
} from "../../utils/validationSchemas";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookies] = useCookies(["user"]);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);

  const handleSignup = (values: FormValues) => {
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
            <TextField
              variant="standard"
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              label="Email address or phone number"
              onKeyUp={() => checkInput(values.emailOrPhone)}
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
            <TextField
              variant="standard"
              type="text"
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              sx={{
                bgcolor: appTheme.palette.primary.contrastText,
                borderRadius: "4.2px 4.2px 0px 0px",
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              variant="standard"
              type="text"
              id="userName"
              name="userName"
              label="Username"
              fullWidth
              sx={{
                bgcolor: appTheme.palette.primary.contrastText,
                borderRadius: "4.2px 4.2px 0px 0px",
                ".css-1xavmop-MuiFormLabel-root-MuiInputLabel-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              }}
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.userName && Boolean(errors.userName)}
              helperText={touched.userName && errors.userName}
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
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
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
