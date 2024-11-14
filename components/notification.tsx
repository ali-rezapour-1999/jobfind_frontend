import React from "react";
import { Snackbar, SnackbarContent } from "@mui/material";

interface notifyProps {
  open: boolean;
  notifyItem: string;
  message: string;
}
const Notification: React.FC<notifyProps> = ({ message, notifyItem, open }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000}>
      <SnackbarContent
        sx={{
          backgroundColor: notifyItem === "error" ? "#FA4032" : "black",
          color: "white",
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Notification;
