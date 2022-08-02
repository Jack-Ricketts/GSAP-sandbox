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
