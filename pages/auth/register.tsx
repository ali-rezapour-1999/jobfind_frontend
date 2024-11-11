import Wrapper from "@/components/wrapper";
import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Link, Typography, Stack, styled } from "@mui/material";
import MuiCard from "@mui/material/Card";
import AuthInput from "@/components/input";

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
        "radial-gradient(at 50% 50%, hsla(180, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),

    ...theme.applyStyles("light", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(120, 100%, 85%, 0.5), hsl(220, 30%, 100%))",
    }),
  },
}));

const Register = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              mb: "15px",
            }}
          >
            ثبت نام در همکار من
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <AuthInput
              lable="شماره همراه"
              id="phone_number"
              name="phone_number"
              type="text"
              placeholder="شماره همراه خود را وارد کنید"
              color="primary"
              inputchangeHandler={() => console.log("alirg")}
            />

            <AuthInput
              lable="رمز عبور"
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              color="primary"
              inputchangeHandler={() => console.log("alirg")}
            />

            <AuthInput
              lable="تکرار رمز عبور"
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور خود را مجدد تکرار کنید"
              color="primary"
              inputchangeHandler={() => console.log("alirg")}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ paddingY: "8px", fontSize: "18px" }}
            >
              ثبت نام
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              حساب کاربری دارید؟{" "}
              <span>
                <Link
                  href="/auth/login/"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  ورود
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </Wrapper>
  );
};
export default Register;
