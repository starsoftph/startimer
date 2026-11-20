// StarTimer landing page interactions
// Replace the URL below with your actual installer/download URL.
const STARTIMER_DOWNLOAD_URL = "https://www.mediafire.com/file/vm3nbd5o04yxs5u/StarTimer.zip/file"; // Example: "https://www.mediafire.com/file/vm3nbd5o04yxs5u/StarTimer.zip/file"

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

document.querySelectorAll("#download-button, .nav-actions .button-primary, .hero-buttons .button-primary, .cafe-copy .button-primary").forEach(button => {
  button.href = STARTIMER_DOWNLOAD_URL;
  if (STARTIMER_DOWNLOAD_URL === "#") {
    button.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your StarTimer download URL in script.js (STARTIMER_DOWNLOAD_URL).");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
