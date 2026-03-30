---
title: "3D Print-in-Place - A Design Journey"
description: Print in place 3D prints are very cool, so I decided to design and print a ratchet screwdriver.
date: 2026-03-28T19:49:07Z
image: 04-lineup.jpg
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

I had a vague idea of what I wanted: something compact, satisfying to use, and ideally something that didn’t explode the first time I applied actual torque.
**Simple**.
I had an idea of the requirements in my mind, but it is only after the project is complete that I am writing these down (note to future self on that one).

- must accept a regular 6.35mm hex bit
- must be fully 3D printed
- must be print-in-place (because apparently I enjoy suffering)
- and lastly, must ratchet in both directions, and also lock

Naturally, I then ignored how difficult that last one would be.
This ended up taking about 30 test prints to get right!
But having come out the other side of this mildly chaotic process, it is only now that I can retroactively pretend there were a few clear milestones along the way.

# Research (or: looking at pictures and pretending I understand them)

I started by studying existing designs:

![Xiaomi’s beautifully engineered ratchet screwdriver](04-xaiomi.png)  ![A chunky Draper Redline for reference](04-draper-redline.jpg) ![Internal Ratchet mechanism](04-reference-mechanism.jpg)

All this research gave me a warm fuzzy feeling like this was going to be super easy. How wrong I was.

# Milestone 1 - Solving the Wrong Problem First

I started with the chuck because, obviously, that would be the hardest part. My goal was to create something that accepted a standard 6.35mm hex bit without relying on magnets—mostly because I didn't have any magnets, though I do own multiple drills and a frankly excessive collection of bits. So naturally, instead of designing a screwdriver, I spent an embarrassing amount of time meticulously modelling a hex bit.

![Very accurate model of a hex bit](04-nicely-modelled-hex-bit.png)

This detailed model became the basis of a spiral retention mechanism designed to grip the bit, and while it worked, it was also completely overengineered for what I actually needed. I then spent several weeks making it smaller, breaking it, and making it slightly less small again—none of which mattered in the end since it survived the entire project anyway.

> Takeaway: I solved the wrong problem first… but accidentally built something that survived the entire project.

# Milestone 2 - Learning What a Ratchet Isn’t

With the chuck "done", I moved on to the mechanism, which I assumed would be the easy part. I had a nice mental model in my head: sliding selector, ratchet pawl, job done. Except it wasn't. I built something that technically worked—as long as I handled it incredibly carefully with barely any pressure. It was fragile, inconsistent, and mostly just baffling.

Then came the “teeth phase”:

- *more teeth* → didn’t print
- *angled teeth* → printed perfectly, worked in both directions, but not vey strong.
- *fewer teeth* → still wrong

At one point it looked like a lightsaber, which I’m counting as a win.

![Casually making a lightsabre](04-lightsabre.jpg)

> Takeaway: I could make something that looked like a ratchet. Not something that behaved like one.

# Milestone 3 - The "Turning" Point

At some point I realized I might just be making everything too small, so I scaled it up significantly and actually looked at my reference materials properly. That's when it clicked: the mechanism was square. I'd been stubbornly trying to force everything into a circular design, so I finally stopped fighting the reference and switched approaches.

This version was massive, but it actually worked—and I mean really worked. I could genuinely drive a screw with it, which was the turning point that made me realize the entire project wasn't going to be a complete disaster.

![Something that actually screws a screw in, just a bit janky!](04-something-that-actually-screws.jpg)

> Takeaway: Stop forcing the design into what you think it should be. Follow what actually works.

# Milestone 4 - Making It Small Again (Properly This Time)

Armed with a working mechanism, I did the sensible thing: I deleted everything and started over from scratch, but this time I prioritized the mechanism first. I aggressively miniaturized, scaling down from ~35mm to ~15mm and printing only the bare minimum needed to validate the design. It worked, though only barely, so I scaled it up slightly and found the stability I was looking for.

Then came the scary part: making it fully print-in-place. With just a 0.3mm gap and no supports, I held my breath and printed it. And it worked. That was a significant moment—suddenly this thing might actually be printable in one go.

![Final ratchet CAD design (feel free to steal)](04-cad-drawing.png) ![Overhangs are fine if the gap is small](04-floating-geometry-ftw.jpg)

> Takeaway: Scaling down changes everything. Print-in-place is just tolerances (and a bit of courage).

# Milestone 5 - Turning It Into an Actual Screwdriver

Until now, I'd only had a mechanism, but now I needed to turn it into an actual tool. So I wrapped a body around it, and everything immediately fell apart. The teeth that worked perfectly before suddenly didn't work, the selector got jammed, and friction became a real problem.

At one point I accidentally fused the handle to the shaft and created a completely solid screwdriver.

I then nearly injured myself trying to ratchet it anyway.

![What it looked like](04-fused-slider.jpg) ![What it should have looked like, note the tiny gap between the outer wall and the inner ring](04-not-fused.jpg) ![Destrictive investiagtion](04-destructive-testing.jpg) ![The culprit](04-fused-parts.png)

After extensive marking with Sharpies, breaking things, and staring at it until my eyes crossed, I finally identified the main issue: asymmetry. The selector needed to be actuated from both sides, otherwise friction would kill it completely once everything was enclosed. I also fixed clearances, stopped things from fusing together, and added internal pin holes for structural strength, which ended up working really well.

![Pin holes added the central ratchet shaft for strength](stronger-middle.png)
![As you can see it adds alot more plastic in the areas where it is needed for strength without having to do any fancy slicing!](04-strength-pinholes.jpg)

Eventually, it actually worked—and I mean properly worked.

![First working Bi directional prototype](04-first-working-bi-directional-prototype.jpg)
![Internal structure, its quite complicated!](04-interior-geometry.png)
![Development of the handle geometry](04-handle-development.png)

> Takeaway: Mechanisms behave very differently once you put them inside something.

# Milestone 6 - From “Works” to “Actually Good”

Now that I had something functional, it was time to polish it and make it actually good. I started refining the design by fixing deformation that resulted from the print geometry, smoothing out the ratchet feel which had been good in one direction but frustratingly crunchy in the other, adjusting tooth height repeatedly, simplifying the chuck back to something very close to iteration 1 (funny how these things come full circle), and loosening the selector so it didn't require a hammer to operate.

I also broke a hex bit inside the shaft at one point, which was less enjoyable than the rest of the process. But this is where it finally crossed the line from "prototype" to "actual tool".

Then came the final pass, where I tightened tolerances, improved the handle shape, reduced internal play, removed the grip pattern and used fuzzy skin in the slicer instead (highly recommend this feature), and removed all floating geometry entirely.

And that was it.
![The finished product](04-finished-product.jpg)

> Takeaway: A working mechanism is not the same as a good tool. The last 10% is all feel.

Lessons Learned

The key lessons from this project: prioritize mechanism first and always; scaling up is massively underrated; print-in-place is about tolerances, not magic; you will throw away a lot of plastic; Sharpies are essential engineering tools; symmetry matters more than you think; and overengineering is fun, but iteration wins.
# Final Result

Here's the finished screwdriver in action—fully functional, it ratchets smoothly, reverses reliably, locks securely, and most importantly, it didn't cost £15.

{{< video src="/video/ratchet-screwdriver.mp4" >}}
