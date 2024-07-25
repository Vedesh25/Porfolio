document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("DOMContentLoaded", (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
  });