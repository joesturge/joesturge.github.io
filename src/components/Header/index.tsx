import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  decomposeColor,
  useTheme,
} from "@mui/material";
import Socials from "../Socials";
import { createRef, useEffect } from "react";
import JuliaSet from "julia-set";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const canvas = createRef<HTMLCanvasElement>();

  const theme = useTheme();

  useEffect(() => {
    if (canvas.current) {
      JuliaSet.render(canvas.current, {
        code: "z * z + -0.72i-0.29",
        palette: [
          decomposeColor(theme.palette.background.default).values,
          decomposeColor(theme.palette.primary.main).values,
        ],
        height: 1,

        center: [0, 0],
        iterations: 50,
        runawayDistance: 10,
      });
    }
  }, [canvas, theme.palette.background.default, theme.palette.primary.main]);

  return (
    <AppBar position="sticky">
      <canvas
        ref={canvas}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      ></canvas>
      <Toolbar>
        <Typography>{props.title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Socials />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
