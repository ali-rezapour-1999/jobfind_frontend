import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Sun, Moon, User, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, themeMode }) => {
  const router = useRouter();

  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h1"
          sx={{ flexGrow: 1, fontSize: "30px", userSelect: "none" }}
        >
          همکار من
        </Typography>

        <Button
          aria-label="jump to profile"
          color="inherit"
          LinkComponent={Link}
          href={router.pathname === "/" ? "/auth/register" : "/"}
          sx={{
            backgroundColor: "primary.light",
            padding: 0.8,
            borderRadius: "10px",
            marginX: 0.4,
          }}
        >
          {router.route === "/" ? <User /> : <Home />}
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
