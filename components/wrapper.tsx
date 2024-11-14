"use client";
import React from "react";
import Navbar from "./navbar";
import { useTheme } from "@/context/themeContext";
import { Container } from "./container";

interface Propos {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Propos) => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <Container sx={{ maxWidth: "1400px", mx: "auto" }}>
      <Navbar themeMode={themeMode} toggleTheme={toggleTheme} />
      {children}
    </Container>
  );
};

export default Wrapper;
