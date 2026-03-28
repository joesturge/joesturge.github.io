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

# Design and Design again


# Notes

explain the requirements:

- must accept a regular hex bit
- must be fully 3d printed
- must be print in place because i hate myself
- must have a way to racthet in both directions, and also lock

research

- include source material:
  - https://www.mi.com/uk/product/mi-16-in-1-ratchet-screwdriver/
  - draper-redline image
  - reference mechanism
- right ive seen enough pics, how hard can it be?


First iteration: I wanted the screwdriver to accept a standard 6mm hex adapter (pic of 3d design of spiral thing and the printed version next to it)
  - I've seen alot of other design rely on a small magnet insert, but I wanted to use things I already had, funnily enough, I have two drill and tonnes of bits, but not a single ratchet
  - I started by designing the chuck as i originally thougt that would be that hardest part
  - ( insert picture of my metricually modelling a 6.35mm hex bit - explain bikeshedding...)
  - then designing a complex spiral shaped bit retainer, it works, if a little overengieerd, this design did last a while through the iterations.

Second iteration: Made the end bit a bit smaller (pic of 3d design of smaller chuck and the printed version next to it)
  - Was still conviced that by now I have solved the hardest problems, how wrong I was

Third iteration: Was still a bit too big so made chuck smaller, this instantly broke things
  - explain how zac freidmand of gridfinity fame explained how it is okay to throw away and scribble all over old prints

Fourth iteration: Well thats the hard bit solved... not. (this is onshape v2 as here I actually started using the versioning feature in onshape, thank god i did)
  - Made adjustments to the chuck to make the smaller form factor work - yay
  - started work on the rachet
  - this is hard
  - explain how i had invisoned the design working (include pic of referecne rachet design i had in mind)
  - stupid slidy thing
  - this design did work, but only if i held very gently, and also it was super fragile
  - show pic of onshap version
  - optimistically included reverse ratchet

fifth iteration: well that kinda worked, now let me ruin evrything
  - this version has more teeth but they were smaller
  - the teeth did not print properly
  - atlease it looked like a lightsaber, so there is that (pic of lightsabre like design)
  - this is when i discovered that you need to support the layers above durr.

sixth iteration: angled teeth for the win!
  - The teeth printed this time, all 20 of them
  - but the rachet was still sub optimal, but that i mean the teeth printed too strong, the rachet held very well but in both directions...
  - was borked

seventh iteration:
  - reduced to 5 teeth, still did not work, even thoug it looked cool

eighth iteration: time to scale up, obviously im making these too small
  - looked again at the source image of the ratchet and realised that it was square, perhaps I shoud square my circle so to speak
  - I really took my time with this iteration, not caring about the final screwdriver product just trying to figure out the mechanism
  - mechanism firtst, scredriver later (this is a mindset i wish i took sooner)
  - this mechanism was far to big, but this was the first iteration where the force i could apply was mega
  - I actually was able to screw a screw with this iteration
  - mega turing point, i now knew the geometry to aim for

ninth iteration: clean slate
 - I deleted the entire project and started from scratch, this time i perfected the ratchet mechanis, this is the same geometry that i used in the final screwdriver
 - I miniaturised it to the max, only printing the minimal parts i needed to test if the mechnism worked
 - I went from 35mm outer diameter all the way down to 15, and it worked, but only just

tenth iteration: slightly bigger
 - This was perfect, I just sclaed up the mini ratcet shape ever so slightly and it was perfect
 - I was still printed it flat on the bed though, print in place required thing to be float in mid air i was scared about that

eleventh iteration: winging it, will it fly?
  - I added a gab on 0.3mm from the ratchet flap and the surface below it to see if i even needed to worry about support, it was fine
  - this was another mega turning point
  - this was the most compact and bi directional ratchet design yet

twleth iterationL what is this a screwdriver?
  - I went ahead and designed the rest of the owl around this mechanism design, im writing this as I wait to see if it is going to work
  - It slightly worked, I made the teeth 5 mm high instead of 10 mm high which was in my workign prototype, and also the notch for the ractch locatioor was too tight
  - more sharpie on the 3d print is required lol
  - after some destructive investiagtion (show pic) it turned out that the thing stopping the direction switch from working was assymetry, I need to actuate the reverse switch from both sides as the slider has too much friction when positioned inside a case
