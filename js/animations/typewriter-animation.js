import { gsap } from "gsap";

export const typewriterAnimation = (data) => {
  const headerText = data.header;
  const header = document.querySelector(".header");

  const bodyText = data.body;
  const body = document.querySelector(".body");

  // Clear text before starting
  header.textContent = "";
  body.textContent = "";

  // Create a GSAP timeline
  const tl = gsap.timeline();

  // Loop through each character and animate it
  headerText.split("").forEach((char, i) => {
    tl.to(header, {
      duration: 0.1, // typing speed per char
      onUpdate: () => {
        header.textContent = headerText.substring(0, i + 1);
      },
    });
  });

  bodyText.split("").forEach((char, i) => {
    tl.to(header, {
      duration: 0.05, // typing speed per char
      onUpdate: () => {
        body.textContent = bodyText.substring(0, i + 1);
      },
    });
  });

  return tl;
};
