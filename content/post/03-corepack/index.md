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

## Why Use Corepack?

- **Team consistency**: Everyone uses the same package manager version
- **CI/CD reliability**: Your builds use the exact same tools locally and in production
- **Onboarding simplicity**: New developers get the right tools automatically

## Prerequisites
It is recommended, although not mandatory, (your mileage may vary) that you uninstall pnpm and yarn before proceeding.

```bash
npm uninstall -g yarn pnpm
```

## Getting Started

Enabling corepack on a project is as simple as running one command:

```bash
corepack enable
```

Congratulations, you have now enabled corepack!

## Doing Stuff
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

## How does it work?

When a teammate clones your repo and runs `npm install`, Corepack will:
1. Detect your `packageManager` field specifies pnpm for example
2. Block the command with: "This project is configured to use pnpm because package.json has a 'packageManager' field"
3. Force them to run `pnpm install` instead
4. Automatically download pnpm@10.20.0 if they don't have it

## Things to Know

- Corepack requires Node.js 16.9+ (bundled with 19+)
- Some CI environments may need `corepack enable` in their setup
- You can still use `npm` commands, but Corepack will redirect to your chosen manager

## Future Excerice

Why not write a Github action to install, build, test, package and publish a project but be package manager agnostic?
