import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Content from "./components/Content";
import {MDXProvider} from '@mdx-js/react';
import components from "./components/MDX"

const header = {
  textDecoration: "underline",

}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3F3C5C",
    },
    secondary: {
      main: "#F3FFDD"
    }
  },
  typography: {
    fontFamily: "monospace",
    allVariants: {
      color: "#F3FFDD",
    },
    body1: {
      fontSize: 20,
    },
    h1: header,
    h2: header,
    h3: header,
    h4: header,
    h5: header,
    h6: header
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <CssBaseline />
        <Header title="dev.joesturge.com" />
        <Content />
        <Socials />
        </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
