import * as React from "react";
import { Button, Link, Box, Typography } from "@mui/material";
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
  massage: string;
}

const Register = () => {
  const [inputData, setInputData] = React.useState<inputProps | null>(null);
  const [error, setError] = React.useState<errorProps | null>(null);
  const phoneValidation = (phone: string): boolean => {
    const iranPhoneNumberRegex = /^(?:\+98|0)?9\d{9}$/;
    return iranPhoneNumberRegex.test(phone);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(error);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputData?.repassword && inputData.repassword == inputData.password) {
      setError({
        massage: "رمز عبور با تکرارش برابر نیست!",
        errorItem: "repassword",
        error: true,
      });
    } else {
      setError({
        massage: "",
        errorItem: "",
        error: true,
      });
    }
    if (inputData?.password && inputData.password.length > 6) {
      setError({
        massage: "رمز عبور باید بیشتر زا ۶ حروف با عدد باشد.",
        errorItem: "password",
        error: true,
      });
    } else {
      setError({
        massage: "",
        errorItem: "",
        error: true,
      });
      if (inputData?.phone_number && phoneValidation(inputData.phone_number)) {
        setError({
          massage: "شماره تلفن وارد شده صحیح تیست",
          errorItem: "phone_number",
          error: true,
        });
      } else {
        setError({
          massage: "",
          errorItem: "",
          error: true,
        });
      }
      if (error?.errorItem && !error.errorItem) {
        console.log("alirg");
      }
    }
  };

  return (
    <Wrapper>
      <Container direction="column" justifyContent="space-between">
        <CardContainer variant="outlined">
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
              color={
                error?.error && error.errorItem == "phone_number"
                  ? "error"
                  : "primary"
              }
              inputchangeHandler={inputHandler}
            />

            <AuthInput
              lable="رمز عبور"
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              color={
                error?.error && error.errorItem == "password"
                  ? "error"
                  : "primary"
              }
              inputchangeHandler={inputHandler}
            />

            <AuthInput
              lable="تکرار رمز عبور"
              id="repassword"
              name="repassword"
              type="password"
              placeholder="رمز عبور خود را مجدد تکرار کنید"
              color={
                error?.error && error.errorItem == "repassword"
                  ? "error"
                  : "primary"
              }
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
