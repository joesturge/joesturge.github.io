---
title: "The Context Flywheel: A Pragmatic Approach to Context Engineering"
description: "How I use a lightweight Copilot skill to keep repository guidance useful, focused, and low-maintenance."
date: 2026-10-25T12:41:00Z
image: flywheel.jpg
math:
license:
hidden: false
comments: true
draft: false
tags:
  - development
  - AI
  - git
  - Copilot
  - agile
categories:
  - development
---

When using GitHub Copilot on a large codebase, context can get messy.

Without repository guidance, Copilot can miss the patterns and conventions that aren't obvious from the code. On the other hand, writing loads of instructions up front, or putting everything in `.github/copilot-instructions.md`, adds context and can leave you with stale docs.

I use a simple, bottom-up workflow I call **The Context Flywheel**. When I come across something about the repo that seems worth keeping, I ask Copilot to help work out what to capture and where it should go.

The loop is straightforward: development friction reveals something useful, that knowledge gets captured in the right place, and future work can use it instead of rediscovering it. Over time, that should mean fewer repeated corrections and less friction.

## The Rule of Three

I don't write rules for problems I haven't hit yet. If I find a strange edge case or a repo-specific pattern, I fix the immediate issue and get on with the work.

If I keep correcting Copilot, or run into the same pattern a few times, that might be a sign it's worth writing down. The Rule of Three is my own rule of thumb, not a threshold the skill enforces. Some things are worth documenting the first time; other things don't need a permanent rule at all.

## How the skill works

I built The Context Flywheel as a GitHub Copilot skill. I use it when wrapping up a task or when I find something about the repo that seems worth keeping. It looks at the conversation, the changes, and the existing docs.

It then:

- **Filters the noise:** It looks for repo-specific constraints, recurring edge cases, and patterns. Not generic advice or one-off fixes.
- **Checks the docs:** It checks for docs that are out of date or missing something useful. If the fix is clear and low-risk, it updates them. If not, it explains the gap and suggests what to change.
- **Picks a home:** It puts the guidance where it makes sense: path-specific instructions, global Copilot instructions, a skill, a prompt, an agent, or the project's own docs.

The skill lives in the plugin at `skills/context-flywheel/SKILL.md`. Copilot instructions might go under `.github/`; docs for people should go wherever the project keeps its documentation.

## I stay in control

If the change is clear and low-risk, the skill can make a focused edit in my working tree and tell me what it changed and why. If the right change or destination isn't clear, it suggests an edit instead.

I review the diff and decide whether the guidance is correct and useful. I can keep it, change it, or drop it, and choose whether to commit it with the work. There's no separate approval step: an AI-made edit is still just a working-tree change, not something added to the shared repo automatically.

## Why this works

I don't need to document the whole repo up front. I can capture useful details while the work is still fresh, as real tasks reveal what is worth keeping, without dumping every bit of repo knowledge into global instructions. I still need to review and maintain the guidance as the repo changes, but that is a smaller job than trying to write and keep comprehensive instructions up to date.

It also feels like a good way to hedge our bets with AI tools. The knowledge it captures is plain, readable Markdown, placed in the repo's relevant guidance or documentation. If the tools change, break, or I stop using them, that effort still leaves useful documentation for the next human engineer.

The Context Flywheel helps identify and draft candidate knowledge, and can keep relevant docs in sync. It can't reliably decide what deserves to become permanent guidance; I still use my judgement about what to keep.

## How this fits Agile and AIDLC

For me, this is Agile for context. No Big Design Up Front or massive instruction files; just small feedback loops that capture useful knowledge while the work is still fresh.

Much of the AIDLC and CDLC discussion I've come across emphasises top-down governance. This adds a complementary bottom-up step: notice friction at the developer's desk, capture what happened, and commit the useful bits to Git.

## Try it out

If you want to give it a go, the plugin is here: [joesturge/context-flywheel](https://github.com/joesturge/context-flywheel). Add the marketplace and install it with the GitHub CLI:

```bash
gh copilot -- plugin marketplace add joesturge/context-flywheel
gh copilot -- plugin install context-flywheel@context-flywheel-marketplace
```

(The example uses GitHub Copilot. The same incremental workflow can be adapted for other tools, but their guidance files and loading conventions differ; adapt the instructions to the tool rather than assuming Copilot's skill format transfers directly.)

Or copy the file below into your Git repo under `.github/skills/context-flywheel/SKILL.md`.

~~~~markdown
---
name: context-flywheel
description: "Use when finishing a task or noticing repository friction, to assess and capture durable knowledge in the right project documentation or AI guidance."
---

# The Context Flywheel

Help maintain useful repository context incrementally as development reveals it. Do not pursue exhaustive upfront documentation or turn every observation into a permanent rule.

## Assess and verify

Consider retaining insights that are durable, non-obvious, repository-specific, and useful to future work. Recurrence is a useful signal, not a threshold; ignore generic advice, transient details, and one-off mistakes.

Check relevant code, tests, configuration, and guidance where practical. Distinguish verified facts from uncertainty; resolve stale or conflicting guidance when evidence is clear, otherwise report the conflict.

## Choose a destination and format

Choose based on audience, timing, scope, existing sources of truth, and target-tool support:

- Use project documentation for human contributors; use AI guidance when an agent needs the information during relevant work.
- Scope guidance to matching files when possible; use global instructions only for rules that apply across the repository. Use on-demand resources when their discovery and loading fit better.
- Prefer the narrowest supported destination. Update or link to an existing source of truth only if the intended audience or agent can reliably discover and access it when needed; otherwise, capture the minimum necessary information in an appropriate, supported location.
- Optimize useful guidance per token: keep automatically loaded instructions lean and place additional detail in on-demand resources when supported.

Validate the actual target tool's format, schema, scope syntax, and discovery behavior before relying on them. Support varies by tool, host, and version; do not assume a field such as `applyTo` has one universal type or syntax.

## Make and report changes

When the evidence and destination are clear and the change is low risk, edit the relevant workspace file directly without asking permission for routine edits. For consequential ambiguity, explain the options and ask or propose before editing.

Preserve unrelated working-tree changes. Edits are proposals for developer review: do not stage, commit, or push. Inspect the diff and perform proportionate validation. Report what changed, where it was placed, and what was actually inspected or verified; do not imply format validation or tool loading was tested unless it was. If no worthwhile improvement is justified, leave files unchanged and say so.
~~~~