# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Suggested areas of improvement] (#suggested-areas-of-improvement)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.jpg)
<img width="2548" height="1312" alt="podcast" src="https://github.com/user-attachments/assets/c1737b4f-8317-4deb-be1a-8240fd01642b" />


### Links

- Solution URL: [https://github.com/Edwards-Github/practice-pod-request-access-landing-page](https://github.com/Edwards-Github/practice-pod-request-access-landing-page)
- Live Site URL: [https://edwards-github.github.io/practice-pod-request-access-landing-page/](https://edwards-github.github.io/practice-pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

What Was Causing the "Zoomed-In" Problem?
The extreme zoom-in and cutoff on mobile were caused by rigid layout settings that forced desktop-sized dimensions onto small mobile screens (which are typically only 320px to 430px wide).

The three main culprits were:

Massive Right Padding: The input field had padding-right: 180px hardcoded. This pushed the boundary of the input far past the right edge of a mobile screen, forcing the whole viewport to stretch out.

Fixed Container Widths: Elements like .left-container (width: 500px) and paragraphs (width: 380px) were physically wider than the 375px mobile screen.

Absolute Positioning Traps: The .text-container used position: absolute, which ripped it out of the natural page layout. On mobile, this made it overlap other elements blindly rather than stacking cleanly underneath the image.

How We Fixed It
We used a CSS Media Query (@media (max-width: 375px)) to reset those desktop restrictions and implement a fluid, responsive layout:

Switched to Relative Flow: We changed .text-container to position: relative so it would behave naturally on the page and sit nicely below other elements.

Adopted Fluid Widths (100%): We replaced fixed pixel widths (like 500px) with width: 100% on the containers, inputs, and paragraphs. This forces the content to shrink or expand dynamically to fit exactly inside whatever screen size it's being viewed on.

Flipped the Layout Order: By applying display: flex and flex-direction: column-reverse to the main container, we told the browser to visually lift the host image to the top of the mobile screen while keeping the HTML code exactly the same.

Reset Content Spacing: We stripped away the giant 180px padding on the input and the negative desktop margins (margin-left: -210px) on the image that were pulling elements off-screen.

### Continued development

I want to work on mobile-first layout and convert redundant CSS to variables.

### Suggested areas of improvement

<img width="963" height="800" alt="areas-of-improvement" src="https://github.com/user-attachments/assets/474317af-0162-4ac8-bf0d-6e7345f45d8a" />

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)? Gemini
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)? Debugging and learning new properties like validity, validity.valueMissing, and validity.typeMismatch. I learned that I could use valadity.valueMissing to check if email was missing and validity.typeMismatch if the email is not valid.

## Author

- Website - [Edward Li](https://edwards-github.github.io/portfolio-website/)
- Frontend Mentor - [@Edwards-Github](https://www.frontendmentor.io/profile/Edwards-Github)
