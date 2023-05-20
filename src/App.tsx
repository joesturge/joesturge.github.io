import {
  AppBar,
  CssBaseline,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Banner from "./Untitled.png";
import { GitHub, LinkedIn } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f3c5c"
    }
  },
  typography: {
    fontFamily: "monospace",
  },
});

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const Thingiverse = props => <SvgIcon {...props}>
  <path d="M11.955.005C5.425-.152-.091 5.485.007 11.805c-.235 6.756 5.537 12.25 12.052 12.196C18.621 23.9 23.912 18.595 24 12.03 24.031 5.483 18.505-.18 11.955.005zm-.047 1.701a10.276 10.276 0 0 1 7.36 17.529 10.275 10.275 0 0 1-17.556-7.287C1.71 6.308 6.268 1.728 11.907 1.706zm-5.55 4.781c-.322 0-.358.033-.358.361v2.248c0 .351.04.391.398.391h3.823c.274 0 .274.004.274.265v9.736a.176.176 0 0 0 .051.146c.04.038.093.059.148.053h2.555c.247-.003.283-.035.283-.28v-9.32c0-.124.004-.239 0-.39s.055-.21.218-.21h3.9c.319.004.35-.032.35-.344V6.855c0-.34-.024-.363-.37-.363h-5.626z"/>
</SvgIcon>

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <StyledToolbar>
          <Typography variant="h5">dev.joesturge.com</Typography>
        </StyledToolbar>
      </AppBar>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
        icon={<SpeedDialIcon />}
      >
      <SpeedDialAction
        icon={<GitHub />}
        FabProps={{ href: "https://github.com/joesturge", target: "_blank"}}
      />
      <SpeedDialAction
        icon={<LinkedIn />}
        FabProps={{ href: "https://www.linkedin.com/in/joseph-sturgeon-99463118b", target: "_blank"}}
      />
      <SpeedDialAction
        icon={<Thingiverse />}
        FabProps={{ href: "https://www.thingiverse.com/joesturge", target: "_blank"}}
      />
      </SpeedDial>
    </ThemeProvider>
  );
};

export default App;
