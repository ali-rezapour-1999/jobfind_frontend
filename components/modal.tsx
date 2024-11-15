import * as React from "react";
import {
  Stack,
  Typography,
  Fade,
  Button,
  Backdrop,
  Modal,
  styled,
} from "@mui/material";
import MuiCard from "@mui/material/Card";

export const Container = styled(MuiCard)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(4),
  borderRadius: "20px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "500px",
  },
  ...theme.applyStyles("dark", {
    background: "rgba(0,0,0,.4)",
    border: "solid red 1px",
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),

  ...theme.applyStyles("light", {
    background: "rgba(0,0,0,.7)",
    border: "solid red 1px",
    color: "white",
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

interface modalProps {
  show: boolean;
  closeHanlder: () => void;
}
const ModalContainer = ({ show, closeHanlder }: modalProps) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={closeHanlder}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Container>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              مطمعنی میخوای از حساب کاربریت خارج بشی؟
            </Typography>
            <Stack direction="row" mt="30px" justifyContent="center" gap="20px">
              <Button
                sx={{
                  width: "100px",
                  padding: "10px",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={closeHanlder}
              >
                بیخیال
              </Button>
              <Button
                sx={{
                  width: "100px",
                  padding: "10px",
                  background: "#FA4032",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                خروج
              </Button>
            </Stack>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalContainer;
