import { Timeline } from "gsap/gsap-core";

export default function () {
  document.addEventListener("DOMContentLoaded", (event) => {
    //画像のアニメーション
    gsap.registerPlugin(ScrollTrigger);
    const speakerImg = document.querySelectorAll(".js-speaker__img");
    speakerImg.forEach((img) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
        },
      });

      tl.call(() => {
        img.classList.add("is-show");
      });
    });
  });
}
