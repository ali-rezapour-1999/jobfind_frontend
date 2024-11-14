import * as React from "react";
import { Button, Link, Box, Typography, CircularProgress } from "@mui/material";
import Wrapper from "@/components/wrapper";
import AuthInput from "@/components/input";
import { CardContainer, Container } from "@/components/container";
import baseApi from "@/config/baseApi";
import axios from "axios";
import { useRouter } from "next/router";
import useAuthStore from "@/context/useAuthStore";
import Notification from "@/components/notification";

interface inputProps {
  email?: string;
  password?: string;
  repassword?: string;
}
interface notifyProps {
  notify: boolean | false;
  notifyItem: string;
  message: string;
}

const Register = () => {
  const [inputData, setInputData] = React.useState<inputProps | null>(null);
  const [notify, setNotify] = React.useState<notifyProps | null>(null);
  const router = useRouter();
  const loading = useAuthStore((state) => state.loading);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setUser = useAuthStore((state) => state.login);

  const validateField = (name: string, value: string): void => {
    if (name === "password" && value.length < 6) {
      setNotify({
        notify: true,
        notifyItem: "error",
        message: "پسورد باید بیشتر از ۶ حروف یا عدد باشد!",
      });
    } else {
      setNotify(null);
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

    if (!notify) {
      try {
        setLoading(true);
        const res = await baseApi.post("/users/login/", {
          email: inputData?.email,
          password: inputData?.password,
        });
        const token = res.data;
        localStorage.setItem("authToken", token.access);
        setUser(inputData?.email || "", token.access);

        setNotify({
          notify: true,
          message: "ورود با موقثیت صورت گرفت",
          notifyItem: "success",
        });

        router.push("/");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Wrapper>
      <Container direction="column" justifyContent="space-between">
        <CardContainer variant="outlined">
          {notify?.notify ? (
            <Notification
              open={notify.notify}
              message={notify.message}
              notifyItem={notify.notifyItem}
            />
          ) : null}

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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ paddingY: "8px", fontSize: "18px" }}
              disabled={notify?.notify ? true : false}
            >
              {loading ? <CircularProgress /> : "ورود"}
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              حساب کاربری ندارید؟{" "}
              <span>
                <Link
                  href="/auth/login/"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  ثبت نام
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
