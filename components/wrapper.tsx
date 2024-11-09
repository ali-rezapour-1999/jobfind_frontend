"use client";
import React from "react";
import Navbar from "./navbar";
import { useTheme } from "@/context/themeContext";

interface Propos {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Propos) => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <div>
      <Navbar themeMode={themeMode} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
};

export default Wrapper;
