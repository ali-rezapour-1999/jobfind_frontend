import Wrapper from "@/components/wrapper";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  styled,
  FormLabel,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { Facebook } from "lucide-react";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  borderRadius: "20px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  ...theme.applyStyles("dark", {
    background: "rgba(0,0,0,.3)",
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

const Register = () => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [numberError, setNumberError] = React.useState(false);
  const [numberErrorMessage, setNumberErrorMessage] = React.useState("");

  const validateInputs = () => {
    const phone_number = document.getElementById(
      "phone_number",
    ) as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      isValid = false;
    } else {
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("رمز عبور باید بیشتر از ۶ رقم باشه!");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!phone_number.value || phone_number.value.length < 1) {
      setNumberError(true);
      setNumberErrorMessage("شماره همراه is required.");
      isValid = false;
    } else {
      setNumberError(false);
      setNumberErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (numberError || emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Wrapper>
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h2"
            variant="h2"
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
            }}
          >
            ثبت نام
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email" sx={{ fontSize: "17px" }}>
                ایمیل{" "}
                <Typography component="small" fontSize="10px">
                  (اختیاری)
                </Typography>
              </FormLabel>
              <TextField
                autoComplete="email"
                name="email"
                required
                fullWidth
                id="email"
                placeholder="ایمیل خود را وارد کنید."
                error={numberError}
                helperText={numberErrorMessage}
                color={numberError ? "error" : "primary"}
                sx={{ fontSize: "14px" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone_number">شماره همراه</FormLabel>
              <TextField
                fullWidth
                id="phone_number"
                placeholder="شماره همراه را بدون صفر وارد کنید."
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">کلمه عبور</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="•••••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              sx={{ paddingY: "8px", fontSize: "18px" }}
            >
              ثبت
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <span>
                <Link href="/" variant="body2" sx={{ alignSelf: "center" }}>
                  Sign in
                </Link>
              </span>
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Facebook")}
              startIcon={<Facebook />}
            >
              Sign up with Facebook
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
    </Wrapper>
  );
};
export default Register;
