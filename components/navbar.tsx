import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Sun, Moon, User } from "lucide-react";

interface NavbarProps {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, themeMode }) => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1, fontSize: "30px" }}>
          همکار من
        </Typography>

        <Button
          aria-label="jump to profile"
          color="inherit"
          href="/profile"
          sx={{
            backgroundColor: "primary.light",
            padding: 0.8,
            borderRadius: "10px",
            marginX: 0.4,
          }}
        >
          <User />
        </Button>

        <Button
          onClick={toggleTheme}
          aria-label="theme toggle"
          color="inherit"
          sx={{
            backgroundColor: "primary.light",
            padding: 0.8,
            borderRadius: "10px",
          }}
        >
          {themeMode === "dark" ? <Moon /> : <Sun />}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
