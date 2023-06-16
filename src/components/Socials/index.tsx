import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  IconButton,
  SvgIcon,
  SvgIconProps,
} from "@mui/material";

const Thingiverse = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M11.955.005C5.425-.152-.091 5.485.007 11.805c-.235 6.756 5.537 12.25 12.052 12.196C18.621 23.9 23.912 18.595 24 12.03 24.031 5.483 18.505-.18 11.955.005zm-.047 1.701a10.276 10.276 0 0 1 7.36 17.529 10.275 10.275 0 0 1-17.556-7.287C1.71 6.308 6.268 1.728 11.907 1.706zm-5.55 4.781c-.322 0-.358.033-.358.361v2.248c0 .351.04.391.398.391h3.823c.274 0 .274.004.274.265v9.736a.176.176 0 0 0 .051.146c.04.038.093.059.148.053h2.555c.247-.003.283-.035.283-.28v-9.32c0-.124.004-.239 0-.39s.055-.21.218-.21h3.9c.319.004.35-.032.35-.344V6.855c0-.34-.024-.363-.37-.363h-5.626z" />
  </SvgIcon>
);

const Npm = (props: SvgIconProps) => (
  <SvgIcon {...props} fontSize="small">
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
  </SvgIcon>
);

const socials: { [key: string]: { icon: JSX.Element; url: string } } = {
  github: {
    icon: <GitHub />,
    url: "https://github.com/joesturge",
  },
  npm: {
    icon: <Npm />,
    url: "https://www.npmjs.com/~joesturge",
  },
  linkedin: {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/joseph-sturgeon-99463118b",
  },
  thingiverse: {
    icon: <Thingiverse />,
    url: "https://www.thingiverse.com/joesturge",
  },
};

const Socials = () => {
  return (
    <Box>
      {Object.keys(socials).map((key) => (
        <IconButton
          key={key}
          aria-label={key}
          href={socials[key].url}
          target="_blank"
          color="inherit"
          tabIndex={0}
        >
          {socials[key].icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default Socials;
