/* --------- 　ここから編集禁止  ------------- */
console.info("\n %c Orelop Static - https://github.com/hilosiva/orelop-static \n", "color: #66ffa5; background: #001010; padding:8px 0;");
import.meta.glob(["../img/**"]);
/* --------- 　ここまで編集禁止  ------------- */
import hamburger from "./lib/hamburger.js";
import windowResize from "./lib/windowResize.js";
import toTop from "./lib/toTop.js";
import gsap from "./lib/gsap.js";

new hamburger();
new windowResize();
new toTop();
new gsap();
