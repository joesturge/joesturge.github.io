---
title: "Corepack manager squared"
description: "Corepack the package manager for your package manager"
date: 2025-10-29T10:02:22+00:00
image: 
math: 
license: 
hidden: false
comments: true
draft: false
tags:
  - npm
  - pnpm
  - yarn
  - corepack
  - package
categories:
  - development
---

Corepack is the package manager for your package manager. If you cannot decide between npm, yarn or pnpm then this might be for you.

Corepack is bundled with Node (19+). It adds metadata to your package.json file to tell CI and engineers which package manager you should be using.

# Prerequisites
It is recommended, although not mandatory, (your mileage may vary) that you uninstall pnpm and yarn before proceeding.

```bash
npm uninstall -g yarn pnpm
```

# Getting Started

Enabling corepack on a project is as simple as running one command:

```bash
corepack enable
```

Congratulations, you have now enabled corepack!

# Doing Stuff
Big deal, right? Nothing has happened. Correct, but try this:

```bash
corepack use pnpm@latest
```

Congrats, your project now uses the pnpm latest version try `pnpm i`.

If you get bored of pnpm, you can try yarn:

```bash
corepack use yarn@latest
```

It's as easy as that.

# Future Excerice

Why not write a Github action to install, build and test, package, publish a project but be package manager agnostic?
