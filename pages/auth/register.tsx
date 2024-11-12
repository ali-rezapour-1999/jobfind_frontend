import * as React from "react";
import { Button, Link, Box, Typography, Snackbar } from "@mui/material";
import Wrapper from "@/components/wrapper";
import AuthInput from "@/components/input";
import { CardContainer, Container } from "@/components/container";

interface inputProps {
  phone_number?: string;
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
  const phoneValidation = (phone: string): boolean => {
    const iranPhoneNumberRegex = /^0?9[0-9]{9}$/;
    return iranPhoneNumberRegex.test(phone);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setErrorMessages = (
    message: string,
    errorItem: string,
    error: boolean,
  ) => {
    setError({
      message: message,
      errorItem: errorItem,
      error: error,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputData?.repassword !== inputData?.password) {
      setErrorMessages("رمز عبور با تکرارش برابر نیست!", "repassword", true);
      return;
    }

    if (inputData?.password && inputData.password.length <= 6) {
      setErrorMessages(
        "رمز عبور باید بیشتر از ۶ حروف با عدد باشد.",
        "password",
        true,
      );
      return;
    }

    if (!phoneValidation(inputData?.phone_number || "")) {
      setErrorMessages("شماره تلفن وارد شده صحیح نیست", "phone_number", true);
      return;
    }

    setErrorMessages("", "", false);
    console.log("Form submitted successfully!");
  };

  return (
    <Wrapper>
      <Container direction="column" justifyContent="space-between">
        <CardContainer variant="outlined">
          {error?.error && (
            <Snackbar color="red" open={error.error} message={error.message} />
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
              lable="شماره همراه"
              id="phone_number"
              name="phone_number"
              type="text"
              placeholder="شماره همراه خود را وارد کنید"
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
