import * as React from "react";
import {
  Button,
  Link,
  Box,
  Typography,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import Wrapper from "@/components/wrapper";
import AuthInput from "@/components/input";
import { CardContainer, Container } from "@/components/container";
import baseApi from "@/config/baseApi";
import axios from "axios";

interface inputProps {
  email?: string;
  password?: string;
  repassword?: string;
}
interface errorProps {
  error: boolean | false;
  errorItem: string;
  message: string;
}

const Register = () => {
  const [inputData, setInputData] = React.useState<inputProps | null>(null);
  const [error, setError] = React.useState<errorProps | null>(null);

  const validateField = (name: string, value: string): void => {
    if (name === "password" && value.length < 6) {
      setError({
        error: true,
        errorItem: name,
        message: "پسورد باید بیشتر از ۶ حروف یا عدد باشد!",
      });
    } else {
      setError(null);
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputData?.repassword !== inputData?.password) {
      setError({
        error: true,
        errorItem: "repassword",
        message:
          "مثل این که تکرار رمزت با رمزت یکی نیستش یه بار دیگه بررسی کن لطفا!",
      });
      return;
    }

    if (!error) {
      try {
        await baseApi.post("/users/register/", {
          email: inputData?.email,
          password: inputData?.password,
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 400) {
          setError({
            error: true,
            message: "این ایمیل از قبل ثبت نام کرده!",
            errorItem: "request_item",
          });
        } else {
          setError({
            error: true,
            message: "مشکلی رخ داده اگر ممکنه بعدا تلاش کنید.",
            errorItem: "none_error",
          });
        }
      }
    }
  };

  return (
    <Wrapper>
      <Container direction="column" justifyContent="space-between">
        <CardContainer variant="outlined">
          {error?.error && (
            <Snackbar open={error.error} autoHideDuration={4000}>
              <SnackbarContent
                sx={{ background: "#FA4032", color: "white" }}
                message={error.message}
              />
            </Snackbar>
          )}
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
              lable="ایمیل"
              id="email"
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید."
              required={true}
              color="primary"
              inputchangeHandler={inputHandler}
            />

            <AuthInput
              lable="رمز عبور"
              id="password"
              name="password"
              type="password"
              required={true}
              placeholder="رمز عبور خود را وارد کنید"
              color="primary"
              inputchangeHandler={inputHandler}
            />

            <AuthInput
              lable="تکرار رمز عبور"
              id="repassword"
              name="repassword"
              type="password"
              required={true}
              placeholder="رمز عبور خود را مجدد تکرار کنید"
              color="primary"
              inputchangeHandler={inputHandler}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ paddingY: "8px", fontSize: "18px" }}
              disabled={error?.error ? true : false}
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
        </CardContainer>
      </Container>
    </Wrapper>
  );
};
export default Register;
