// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    }
  });
  
  // Smooth Scroll for Buttons
  const scrollToBookNow = document.querySelectorAll('a[href="#book-now"]');
  
  scrollToBookNow.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#book-now").scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Form Submission Alert (for demo purposes)
  const contactForm = document.querySelector("form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
  
  // Add Navbar Toggle for Small Screens
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.createElement("div");
  navToggle.className = "nav-toggle";
  navToggle.innerHTML = "&#9776;";
  document.querySelector("header").prepend(navToggle);

  navToggle.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});
