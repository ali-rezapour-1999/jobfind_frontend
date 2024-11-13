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
import { useTheme } from "@emotion/react";

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
  const theme = useTheme();
  const [inputData, setInputData] = React.useState<inputProps | null>(null);
  const [error, setError] = React.useState<errorProps | null>(null);
  const phoneValidation = (phone: string): boolean => {
    const iranPhoneNumberRegex = /^0?9[0-9]{9}$/;
    return iranPhoneNumberRegex.test(phone);
  };

  const validateField = (name: string, value: string): void => {
    // Validation logic for different fields
    if (name === "phone_number" && !phoneValidation(value)) {
      setError({
        error: true,
        errorItem: name,
        message: "لطفا شماره همراه بدون 0 و صحیح وارد کنید.",
      });
    } else if (name === "password" && value.length < 6) {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputData?.repassword !== inputData?.password) {
      setError({
        error: true,
        errorItem: "repassword",
        message: "تکرار رمز عبور با خود رمز عبور برار نیست!",
      });
      return;
    }

    if (!error) {
      console.log("Form submitted successfully!");
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
