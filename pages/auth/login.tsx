import Wrapper from "@/components/wrapper";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  styled,
  FormLabel,
} from "@mui/material";
import MuiCard from "@mui/material/Card";

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

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 80dvh)",
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
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [numberError, setNumberError] = React.useState(false);
  const [numberErrorMessage, setNumberErrorMessage] = React.useState("");

  const validateInputs = () => {
    const phone_number = document.getElementById(
      "phone_number",
    ) as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

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
    if (numberError || passwordError) {
      event.preventDefault();
      return;
    }
  };

  return (
    <Wrapper>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h2"
            variant="h2"
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
              mb: "15px",
            }}
          >
            ورود به همکار من
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="phone_number" sx={{ mb: "10px" }}>
                شماره همراه
              </FormLabel>
              <TextField
                autoComplete="email"
                name="email"
                required
                fullWidth
                id="phone_number"
                placeholder="شماره همراه را بدون صفر وارد کنید."
                error={numberError}
                helperText={numberErrorMessage}
                color={numberError ? "error" : "primary"}
                sx={{ fontSize: "14px" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" sx={{ mb: "10px" }}>
                کلمه عبور
              </FormLabel>
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
              ورود
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              حساب کاربری ندارم؟{" "}
              <span>
                <Link
                  href="/auth/register"
                  variant="body2"
                  sx={{ alignSelf: "center", fontSize: "17px" }}
                >
                  ورود
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </Wrapper>
  );
};
export default Register;
