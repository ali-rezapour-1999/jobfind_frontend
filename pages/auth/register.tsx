import Wrapper from "@/components/wrapper";
import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Link, Typography } from "@mui/material";
import AuthInput from "@/components/input";
import { CardContainer, Container } from "@/components/container";

const Register = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        </CardContainer>
      </Container>
    </Wrapper>
  );
};
export default Register;
