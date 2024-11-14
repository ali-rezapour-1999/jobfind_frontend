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

  React.useEffect(() => {
    const profile_id = localStorage.getItem("item_pro");
    if (profile_id) {
      router.push(`/profile/${profile_id}`);
    }
  }, [router]);

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

    if (inputData?.repassword !== inputData?.password) {
      setNotify({
        notify: true,
        notifyItem: "error",
        message:
          "مثل این که تکرار رمزت با رمزت یکی نیستش یه بار دیگه بررسی کن لطفا!",
      });
      return;
    }

    if (!notify) {
      try {
        setLoading(true);
        await baseApi.post("/users/register/", {
          email: inputData?.email,
          password: inputData?.password,
        });

        setNotify({
          notify: true,
          message: "ثبت نام با موفقیت انجام شد.",
          notifyItem: "success",
        });

        router.push("/auth/login/");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 400) {
          setNotify({
            notify: true,
            message: "این ایمیل از قبل ثبت نام کرده!",
            notifyItem: "error",
          });
        } else {
          setNotify({
            notify: true,
            message: "مشکلی رخ داده اگر ممکنه بعدا تلاش کنید.",
            notifyItem: "error",
          });
        }
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
              disabled={notify?.notify ? true : false}
            >
              {loading ? <CircularProgress /> : "ثبت نام"}
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
