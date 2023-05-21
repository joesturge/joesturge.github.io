import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import background from "./background.png";

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

type HeaderProps = {
    title: string
}

const Header = (props: HeaderProps) => (
  <AppBar position="static">
    <StyledToolbar>
      <Typography>{props.title}</Typography>
    </StyledToolbar>
  </AppBar>
);

export default Header;
