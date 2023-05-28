import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import Socials from "../Socials";
import Canvas from "./Canvas";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {

  const theme = useTheme();

  return (
    <AppBar position="sticky">
      <Canvas colorRamp={["#000", theme.palette.background.paper, theme.palette.primary.main]} />
      <Toolbar>
        <Typography>{props.title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Socials />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
