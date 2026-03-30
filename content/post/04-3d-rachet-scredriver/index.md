---
title: "3D Print-in-Place - A Design Journey"
description: Print in place 3D prints are very cool, so I decided to design and print a ratchet screwdriver.
date: 2026-03-28T19:49:07Z
image: 
math: 
license: 
hidden: false
comments: true
draft: false
tags:
  - 3d printing
  - cad
  - tools
categories:
  - design
---

# Preamble

I recently just upgraded my 3D printer from the Creality K1C to the [K2 Combo edition](https://store.creality.com/uk/products/creality-k2-combo-3d-printer).
I was printing all the usual things one does when they are getting to grips with a new printer: endless Benchys, Gridfinity baseplates, Pokémon figurines.
But when I realized that my workbench was missing something, a ratchet screwdriver.

So I look on all the usual 3D model websites to see if I can find something I like the look of, because of course, I just spent all my money on a 3D printer.
But I could not find anything I liked the look of, so instead of spending 15 quid on a decent Xiaomi ratchet, which I probably should have just done, I decided;
well screw it, I'm gonna make my own, how hard can it be?

# Design and Design Again

Before I started designing, I set myself a few ground rules. The screwdriver had to accept a regular hex bit, be fully 3D printed, and, because I clearly enjoy making things difficult for myself, be print-in-place. Oh, and it had to ratchet in both directions and lock, otherwise what’s the point?

## Research: Inspiration and Delusion

Like any good maker, I started by trawling the internet for inspiration. I checked out the [Mi 16-in-1 Ratchet Screwdriver](https://www.mi.com/uk/product/mi-16-in-1-ratchet-screwdriver/), some classic Draper Redline models, and a bunch of ratchet mechanism diagrams. After a while, I’d seen enough pictures to convince myself this would be easy. (Spoiler: it wasn’t.)

## Iteration 1: The Spiral Chuck

My first goal was to make the screwdriver accept a standard 6.35mm hex bit. Most designs use a little magnet, but I wanted to use what I already had, two drills, loads of bits, but not a single ratchet. I started by meticulously modelling the hex bit (classic bikeshedding), then designed a spiral-shaped bit retainer. It was a bit overengineered, but it actually worked! 

<!-- IMAGE: Spiral chuck design and printed version -->

## Iteration 2: Shrinking the Chuck

Feeling confident, I made the end a bit smaller. Surely I’d solved the hardest problem? How wrong I was. 

<!-- IMAGE: Smaller chuck design and print -->

## Iteration 3: The Breakage

Still too big, so I made the chuck even smaller. It instantly broke. Zac Freidman of Gridfinity fame says it’s okay to throw away and scribble all over old prints, wise words I took to heart.

<!-- IMAGE: Broken small chuck -->

## Iteration 4: The First Ratchet

I thought the hard part was over. Nope. This is where I started using Onshape’s versioning feature (thank god I did). I made the chuck smaller, then started work on the ratchet. This was hard. I had a vision for how it would work (insert reference ratchet design image), and my first “slidy thing” design technically worked, but only if I held it very gently. It was super fragile. Still, I optimistically included a reverse ratchet.

<!-- IMAGE: Onshape v2, fragile ratchet -->

## Iteration 5: Lightsaber Vibes

This version had more teeth, but they were smaller. The teeth didn’t print properly, but at least it looked like a lightsaber, so there’s that. (Insert lightsaber-like design image.) This is when I discovered you need to support the layers above... durr...

<!-- IMAGE: Lightsaber-like failed print -->

## Iteration 6: Angled Teeth for the Win?

I angled the teeth and, finally, they printed, all 20 of them! But the ratchet was still suboptimal. The teeth were too strong, so the ratchet held very well… in both directions. Borked.

<!-- IMAGE: Angled teeth print -->

## Iteration 7: The Cool Factor

I reduced the number to 5 teeth. Still didn’t work, even though it looked cool.

<!-- IMAGE: Five teeth version -->

## Iteration 8: Scaling Up

Time to scale up. I looked again at the source image and realized the ratchet was square. Maybe I should “square my circle,” so to speak. I really took my time with this iteration, not caring about the final screwdriver, just trying to figure out the mechanism. Mechanism first, screwdriver later (a mindset I wish I’d taken sooner). This mechanism was far too big, but for the first time, I could actually screw a screw with it. Mega "turning point" (Pun intended). I finally knew the geometry to aim for.

<!-- IMAGE: Large square mechanism -->

## Iteration 9: Clean Slate

I deleted the entire project and started from scratch. This time, I perfected the ratchet mechanism, the same geometry I used in the final screwdriver. I miniaturized it to the max, only printing the minimal parts I needed to test if the mechanism worked. I went from 35mm outer diameter all the way down to 15mm, and it worked, but only just.

<!-- IMAGE: Miniaturized ratchet test -->

## Iteration 10: Slightly Bigger, Slightly Braver

I just scaled up the mini ratchet shape ever so slightly and it was perfect. I was still printing it flat on the bed, though. Print-in-place required things to float in mid-air, and I was scared about that.

<!-- IMAGE: Slightly larger ratchet -->

## Iteration 11: Winging It

I added a gap of 0.3mm from the ratchet flap to the surface below to see if I even needed to worry about support. It was fine! Another mega turning point. This was the most compact and bi-directional ratchet design yet.

<!-- IMAGE: Print-in-place gap test -->

## Iteration 12: What is this, a Screwdriver?

I went ahead and designed the rest of the tool around this mechanism. It sort of worked, I made the teeth 5mm high instead of 10mm like in my working prototype so they broke... and the notch for the ratchet locator was too tight. More sharpie on the 3D print required, lol.

After some destructive investigation (insert image), it turned out the thing stopping the direction switch from working was asymmetry. I need to actuate the reverse switch from both sides, as the slider has too much friction when positioned inside a case.

<!-- IMAGE: Destructive investigation and final prototype -->

# Iteration 13: The Accidental Monolith

- Accidentally fused the handle with the chuck during design, resulting in a fixed (non-ratcheting) screwdriver
- Learned that the slider notches were too tight for the gear-change mechanism—could only move it with a hammer
- Even with these issues, the basic functionality held up, which was encouraging

# Iteration 14: Finding the Sweet Spot

- Separated the handle from the chuck properly so the mechanisms could work independently
- Returned to 10mm ratchet teeth height (the original successful prototype size)
- **First iteration where everything functioned together correctly**:
  - Parts separated cleanly, allowing mechanisms to perform as designed
- Added pin holes down the middle of the shaft for structural reinforcement
  - This simple technique dramatically improved strength (reference hollow wall strengthening videos/techniques)
  - The screwdriver became noticeably rigid despite the complex internal mechanisms

# Iteration 15: Building the Outer Form

- Added the complete external screwdriver body (except the final chuck design—used a simple 6.35mm hole for now, reinforced with pin holes)
- Discovered directional asymmetry: ratchet worked smoothly in one direction but felt crunchy in reverse
- Added 10mm reinforcement rings at the top and bottom of the ratchet mechanism to resolve two issues:
  - Eliminated deformation of the floating ratchet ring
  - Provided a clean aesthetic appearance when the gear shift was moved
- **Issues found**: insufficient clearance for the hex bit, and gear shifter jamming from a geometry oversight

# Iteration 16: The First Complete Prototype

- Extended the outer handle all the way to the build plate to eliminate floating support sections in the slicer
- Trade-off: The shaft interior lost a gripping surface, making disassembly difficult (could only extract by pushing with the hex bit)
- This revealed a critical flaw: **the hex bit could shear inside the shaft under extraction force**
- **First fully usable ratchet screwdriver**—comfortable to hold, proper proportions
- Still tuning ratchet tooth height: 10mm provided good engagement but made the reverse direction feel sluggish

# Iteration 17: Refining the Mechanism

- Tested reducing ratchet teeth back to 5mm to find the optimal balance between engagement and smooth reverse action
- Completely redesigned the hex bit chuck and retaining clip—interestingly, this simplified version echoed the original Iteration 1 design
- Smoothed the slider gear shifter action; previous versions had unwanted friction and crunchiness
- **Major milestone: Eliminated all floating parts in the slicer** for the first time, which should make extraction much easier
- At this point, the mechanism geometry was fully dialed in and the design felt production-ready (for a homemade tool)
- the chuck was a little too loose

# Iteration 18: astectics and final usabilty tweaks (hopefully)

- Made the hex chuck a touch tighter and bought in the chuck retaining spring slightly
- Increased the clearence on the slider to make it stick less
- improved the shape of the handle, and removed grip pattern (I used slicer settings to add texture to the face i want and will reccomend that in the final product)
- improved the internal geometry for the slider to have less play
