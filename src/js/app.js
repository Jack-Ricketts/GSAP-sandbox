import "../../style.css";

import gsap from "gsap";

gsap.to(".hour", {
  rotation: 360,
  duration: 12,
  ease: "none",
  repeat: -1,
});

gsap.to(".min", {
  rotation: 360,
  duration: 0.5,
  ease: "none",
  repeat: -1,
});

// gsap.to("body", {
//   repeatDelay: 12,
//   duration: 12,
//   repeat: -1,
//   backgroundColor: "#3883fc",
// });
// gsap.to("body", {
//   delay: 12,
//   duration: 12,
//   repeat: -1,
//   backgroundColor: "#030117",
// });

let tl = gsap.timeline({ repeat: -1 });

tl.to("body", {
  duration: 12,
  backgroundColor: "#3883fc",
});

tl.to("body", {
  duration: 12,
  backgroundColor: "#030117",
});
