/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright 2019-present ViPro <VdustR@gmail.com> (https://VdustR.github.io)
import { Typography, Paper, Divider } from "@mui/material";
import { MDXComponents } from "mdx/types.js";

const components: MDXComponents = {
  p: (() => {
    const P = (props: any) => (
      <Typography {...props} />
    );
    return P;
  })(),
  h1: (() => {
    const H1 = (props: any) => (
      <Typography {...props} component="h1" variant="h1" />
    );
    return H1;
  })(),
  h2: (() => {
    const H2 = (props: any) => (
      <Typography {...props} component="h2" variant="h2" />
    );
    return H2;
  })(),
  h3: (() => {
    const H3 = (props: any) => (
      <Typography {...props} component="h3" variant="h3" />
    );
    return H3;
  })(),
  h4: (() => {
    const H4 = (props: any) => (
      <Typography {...props} component="h4" variant="h4" />
    );
    return H4;
  })(),
  h5: (() => {
    const H5 = (props: any) => (
      <Typography {...props} component="h5" variant="h5" />
    );
    return H5;
  })(),
  h6: (() => {
    const H6 = (props: any) => (
      <Typography {...props} component="h6" variant="h6" />
    );
    return H6;
  })(),
  blockquote: (() => {
    const Blockquote = (props: any) => (
      <Paper style={{ borderLeft: "4px solid grey", padding: 8 }} {...props} />
    );
    return (Blockquote);
  })(),
  ul: (() => {
    const Ul = (props: any) => <Typography {...props} component="ul" />;
    return Ul;
  })(),
  ol: (() => {
    const Ol = (props: any) => <Typography {...props} component="ol" />;
    return Ol;
  })(),
  li: (() => {
    const Li = (props: any) => <Typography {...props} component="li" />;
    return Li;
  })(),
  hr: (() => {
    const Hr = (props: any) => <Divider {...props} component="hr" />;
    return (Hr);
  })(),
  em: (() => {
    const Em = (props: any) => (
      <Typography {...props} color="secondary" component="span" />
    );
    return Em;
  })(),
  wrapper: (() => {
    const Wrapper = (props: any) => (
      <div {...props} className="markdown-body" />
    );
    return Wrapper;
  })(),
};

export default components;
