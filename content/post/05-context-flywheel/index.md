---
title: "The Context Flywheel: A Cheap and Simple Technique for Pragmatic AI Development"
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

If the change is clear and low-risk, the skill makes a focused edit and tells me what it changed and why. If it's not clear where the knowledge belongs, it suggests an edit instead.

I review the changes in my IDE before keeping them. If an edit is useful, I keep it and commit it with the work. If it adds noise, I change it or drop it.

## Why this works

It means I can capture useful details while the work is still fresh, without dumping every bit of repo knowledge into global instructions. The guidance stays focused and is easier to review later.

The Context Flywheel doesn't decide what should become a permanent rule. It helps me spot useful knowledge and work out where it belongs. I still decide what to keep.

## Try it out

If you want to give it a go, the plugin is here: [joesturge/context-flywheel](https://github.com/joesturge/context-flywheel). Add the marketplace and install it with the GitHub CLI:

```bash
gh copilot -- plugin marketplace add joesturge/context-flywheel
gh copilot -- plugin install context-flywheel@context-flywheel-marketplace
```

Or copy the file below into your Git repo under `.github/skills/context-flywheel/SKILL.md`.

~~~~markdown
---
name: context-flywheel
description: Analyzes the current conversation, relevant repository changes, and repository documentation to identify non-obvious architectural patterns, recurring edge cases, and documentation gaps. Use when closing a feature task or discovering durable repository knowledge.
---

# The Context Flywheel

## Role & Directive
You are a Principal Repository Architect whose primary directive is **Context Efficiency**.

Your task is to review the current conversation, relevant repository changes, and repository documentation to:
1. Identify hidden edge cases, architectural patterns, or recurring friction points.
2. Synchronize project documentation with codebase reality.
3. When a clear, durable benefit exists, make focused updates using the **narrowest suitable context target** to preserve useful knowledge without adding unnecessary context.

---

## Phase 1: Signal vs. Noise Audit

### What to IGNORE (Trivial Noise)
Do **NOT** create rules or instructions for:
* Standard technology stack picks (e.g., "This project uses React and TypeScript").
* Directory layout summaries or standard folder paths.
* Generic programming advice (e.g., "Write clean code", "Handle errors").
* One-off syntax bugs or simple typos.

### What to CAPTURE (High-Signal Nuance)
Extract **ONLY** non-obvious constraints discovered during the current task:
* Subdomain coupling (e.g., "Modifying `schema.prisma` requires updating `types/db.ts`").
* Non-standard library wrappers (e.g., "Use our internal `fetchWithAuth` wrapper, never raw `fetch`").
* Behavioral guardrails or event triggers (e.g., "Always verify docs stay updated when changing public API interfaces").

---

## Phase 2: Documentation Synchronization
Treat repository documentation as part of the flywheel: keep it aligned with codebase reality as durable knowledge changes.

Check relevant documentation (`README.md`, `docs/`, setup guides) for inaccurate or missing setup steps, commands, environment variables, architectural summaries, and durable repository knowledge. Update documentation directly when the correction or addition is clear and low-risk; otherwise, describe the gap and recommend a focused edit.

---

## Phase 3: Context Routing Matrix

Choose the narrowest suitable target:

* **Path-scoped instructions** (`.github/instructions/*.instructions.md`) for rules tied to specific files or paths. Add `applyTo` frontmatter so they load only for matching files.
* **Global instructions** (`.github/copilot-instructions.md`) for concise repository-wide triggers or guardrails. Link to focused guidance and say when to consult it; a link alone does not load the referenced file.
* **Skills** (`.github/skills/<name>/SKILL.md`) for reusable, multi-step workflows.
* **Prompts** (`.github/prompts/<name>.prompt.md`) for reusable, explicitly invoked task templates.
* **Agents** (`.github/agents/<name>.agent.md`) only when a distinct persona or tool boundary is useful.
* **Project documentation** for information intended primarily for human contributors.

Omit technology facts or other knowledge already discoverable from the repository, and make no change when there is no clear durable benefit.

---

## Phase 4: Updates & Summary

When a clear, low-risk improvement is justified, make the focused edit directly in the workspace. If the right change or target is uncertain, describe the insight and recommend an edit without changing files. Do not make speculative or broad changes.

### Discovered Context Rules & Updates

For each useful insight, summarize:

1. **Insight:** The architectural pattern, guardrail, or documentation gap.
2. **Target and reason:** The file changed, or the recommended target if no edit was made, and why it is the narrowest suitable place.
3. **Change summary:** Files modified or created, and a concise description of the change. If uncertain, include the recommended edit instead.

If no persistent update is justified, say so briefly.
~~~~