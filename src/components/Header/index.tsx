import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import background from "./background.png";
import Socials from "../Socials";

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

type HeaderProps = {
    title: string
}

const Header = (props: HeaderProps) => (
  <AppBar position="sticky">
    <StyledToolbar>
      <Typography>{props.title}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Socials/>
    </StyledToolbar>
  </AppBar>
);

export default Header;
