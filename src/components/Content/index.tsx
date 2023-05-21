import { Container } from "@mui/material";
import Body from "./Body.md";
import { useMDXComponents } from "@mdx-js/react";

const Content = () => (
  <Container maxWidth="md">
    <Body components={useMDXComponents()}/>
  </Container>
);

export default Content;
