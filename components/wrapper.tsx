"use client";
import React from "react";
import Navbar from "./navbar";
import { useTheme } from "@/context/themeContext";
import { Box } from "@mui/material";

interface Propos {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Propos) => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
      <Navbar themeMode={themeMode} toggleTheme={toggleTheme} />
      {children}
    </Box>
  );
};

export default Wrapper;
