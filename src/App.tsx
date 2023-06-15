import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Content from "./components/Content";
import { MDXProvider } from "@mdx-js/react";
import components, { MuiMdxComponentsOptions } from "mui-mdx-components";

const header = {
  textDecoration: "underline",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#F3FFDD",
    },
    primary: {
      main: "#3F3C5C",
    },
    secondary: {
      main: "#EB5D09",
    }
  },
  typography: {
    fontFamily: "monospace",
    body1: {
      fontSize: 20,
    },
    h1: header,
    h2: header,
    h3: header,
    h4: header,
    h5: header,
    h6: header,
  },
});

const options: MuiMdxComponentsOptions = {
  propOverrides: {
    em: {
      color: "secondary",
      component: "span"
    }
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components(options)}>
        <CssBaseline />
        <Header title="dev.joesturge.com" />
        <Content />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
