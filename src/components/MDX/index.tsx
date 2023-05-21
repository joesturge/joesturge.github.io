/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright 2019-present ViPro <VdustR@gmail.com> (https://VdustR.github.io)
import { memo } from "react";
import { Typography, Paper, Divider } from "@mui/material";
import { MDXComponents } from "mdx/types.js";

const components: MDXComponents = {
  p: (() => {
    const P = (props: any) => (
      <Typography {...props} />
    );
    return memo(P);
  })(),
  h1: (() => {
    const H1 = (props: any) => (
      <Typography {...props} component="h1" variant="h1" />
    );
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = (props: any) => (
      <Typography {...props} component="h2" variant="h2" />
    );
    return memo(H2);
  })(),
  h3: (() => {
    const H3 = (props: any) => (
      <Typography {...props} component="h3" variant="h3" />
    );
    return memo(H3);
  })(),
  h4: (() => {
    const H4 = (props: any) => (
      <Typography {...props} component="h4" variant="h4" />
    );
    return memo(H4);
  })(),
  h5: (() => {
    const H5 = (props: any) => (
      <Typography {...props} component="h5" variant="h5" />
    );
    return memo(H5);
  })(),
  h6: (() => {
    const H6 = (props: any) => (
      <Typography {...props} component="h6" variant="h6" />
    );
    return memo(H6);
  })(),
  blockquote: (() => {
    const Blockquote = (props: any) => (
      <Paper style={{ borderLeft: "4px solid grey", padding: 8 }} {...props} />
    );
    return memo(Blockquote);
  })(),
  ul: (() => {
    const Ul = (props: any) => <Typography {...props} component="ul" />;
    return memo(Ul);
  })(),
  ol: (() => {
    const Ol = (props: any) => <Typography {...props} component="ol" />;
    return memo(Ol);
  })(),
  li: (() => {
    const Li = (props: any) => <Typography {...props} component="li" />;
    return memo(Li);
  })(),
  hr: (() => {
    const Hr = (props: any) => <Divider {...props} component="hr" />;
    return memo(Hr);
  })(),
  wrapper: (() => {
    const Wrapper = (props: any) => (
      <div {...props} className="markdown-body" />
    );
    return memo(Wrapper);
  })(),
};

export default components;
