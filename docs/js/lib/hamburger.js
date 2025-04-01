export default function () {
  const hamburgerButton = document.querySelector(".js-hamburger");
  const hamburgerLink = document.querySelectorAll(".js-header__link");
  const body = document.body;

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", (e) => {
      const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";

      e.currentTarget.setAttribute("aria-expanded", !isExpanded);

      document.documentElement.classList.toggle("is-drawerActive");
      body.classList.toggle("is-fixed");

      hamburgerLink.forEach((link) => {
        link.addEventListener("click", () => {
          document.documentElement.classList.remove("is-drawerActive");
          body.classList.remove("is-fixed");
        });
      });
    });
  }
}
