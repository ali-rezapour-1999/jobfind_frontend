import { styled, Stack } from "@mui/material";
import MuiCard from "@mui/material/Card";

export const Container = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 90dvh)",
  minHeight: "100%",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(180, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),

    ...theme.applyStyles("light", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(130, 20%, 85%, 0.5), hsl(250, 20%, 90%))",
    }),
  },
}));

export const CardContainer = styled(MuiCard)(({ theme }) => ({
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
    maxWidth: "900px",
  },
  ...theme.applyStyles("dark", {
    background: "rgba(0,0,0,.3)",
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),

  ...theme.applyStyles("light", {
    background: "rgba(0,0,0,.1)",
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));
