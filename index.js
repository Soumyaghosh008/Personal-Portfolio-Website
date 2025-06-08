// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle Resume Button Click
  const resumeButton = document.querySelector(".resume-btn");
  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      window.open("https://example.com/your_resume.pdf", "_blank"); // It will be replace by my actual resume link.
    });
  }

  // Optional: Smooth scroll to sections if you assign IDs to them
  const navLinks = document.querySelectorAll(".nav-sections a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
