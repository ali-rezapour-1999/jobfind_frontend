import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, themeMode }) => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <IconButton
          color="inherit"
          onClick={toggleTheme}
          edge="end"
          aria-label="theme toggle"
        >
          {themeMode === "dark" ? <Moon /> : <Sun />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
