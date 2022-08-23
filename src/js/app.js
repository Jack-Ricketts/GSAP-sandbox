import "../../style.css";

import gsap from "gsap";

//automated clock-----------------

// gsap.to(".hour", {
//   rotation: 360,
//   duration: 12,
//   ease: "none",
//   repeat: -1,
// });

// gsap.to(".min", {
//   rotation: 360,
//   duration: 0.5,
//   ease: "none",
//   repeat: -1,
// });

// let tl = gsap.timeline({ repeat: -1 });

// tl.to("body", {
//   duration: 12,
//   backgroundColor: "#3883fc",
// });

// tl.to("body", {
//   duration: 12,
//   backgroundColor: "#030117",
// });

//mousewheel clock-----------------

let shiftHour = 0;
let shiftMinute = 0;
let am = true;
const body = document.querySelector("body");
const el = document.querySelector(".clock");
const h = document.querySelector(".hour");
const m = document.querySelector(".min");

let b = 0;
let c = 5;

function timeShift(event) {
  event.preventDefault();
  shiftHour += event.deltaY * 0.04;
  shiftMinute += event.deltaY * 0.96;
  if (am == true) {
    b += event.deltaY * 0.0225;
    c += event.deltaY * 0.028;
  } else {
    b -= event.deltaY * 0.0225;
    c -= event.deltaY * 0.028;
  }
  b = Math.min(Math.max(0, b), 200);
  c = Math.min(Math.max(5, c), 255);
  h.style.transform = `rotate(${shiftHour}deg)`;
  m.style.transform = `rotate(${shiftMinute}deg)`;
  body.style.backgroundColor = "rgb(" + 0 + "," + b + "," + c + ")";
  console.log(b, c);
}
el.onwheel = timeShift;
