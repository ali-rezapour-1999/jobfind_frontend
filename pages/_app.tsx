// _app.tsx
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "@/context/themeContext";
import { lightTheme, darkTheme } from "@/config/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {(currentTheme) => (
          <MuiThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Head>
              <title>همکار من</title>
              <meta name="description" content="Hamkarman for Test" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />
          </MuiThemeProvider>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
}

const ThemeConsumer: React.FC<{ children: (theme: Theme) => JSX.Element }> = ({
  children,
}) => {
  const { themeMode } = useTheme();
  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;
  return children(currentTheme);
};

export default MyApp;
