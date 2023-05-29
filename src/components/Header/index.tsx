import { AppBar, Box, Toolbar, Typography, decomposeColor, useTheme } from "@mui/material";
import Socials from "../Socials";
import Canvas from "./Canvas";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {

  const theme = useTheme();
  const background = decomposeColor(theme.palette.background.paper).values

  return (
    <AppBar position="sticky">
      <Canvas palette={[background, decomposeColor(theme.palette.primary.main).values, background]} />
      <Toolbar>
        <Typography>{props.title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Socials />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
