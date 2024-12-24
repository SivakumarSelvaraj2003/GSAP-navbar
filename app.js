gsap.registerPlugin(ScrollTrigger);
AOS.init();

if (window.innerWidth > 768) {
  const iconLinkedin = document.querySelector(".social-media1");
  const iconGithub = document.querySelector(".social-media2");

  gsap.to(iconLinkedin, {
    duration: 1.5,
    x: 40,
    rotate: 360,
    delay: 0.2,
    ease: "bounce.out",
    onStart: () => {
      setTimeout(() => {
        iconLinkedin.style.color = "white";
      }, 700);
    },
  });

  gsap.to(iconGithub, {
    duration: 1.5,
    x: 40,
    rotate: 360,
    delay: 0.2,
    ease: "bounce.out",
    onStart: () => {
      setTimeout(() => {
        iconGithub.style.color = "white";
      }, 700);
    },
  });
}

gsap.to(".line", {
  width: "100%",
  duration: 1.5,
  ease: "power1.out",
});
