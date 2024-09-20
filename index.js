const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const navbar = document.querySelector(".second-navbar ul");

function updateScrollButtons() {
  const isScrollable = navbar.scrollWidth > navbar.clientWidth;
  scrollLeftButton.style.display = isScrollable ? "block" : "none";
  scrollRightButton.style.display = isScrollable ? "block" : "none";
}

function scrollNavbar(direction) {
  const scrollAmount = 100;
  navbar.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

scrollLeftButton.addEventListener("click", () => scrollNavbar("left"));
scrollRightButton.addEventListener("click", () => scrollNavbar("right"));

window.addEventListener("resize", updateScrollButtons);
updateScrollButtons();

const navbarItems = document.querySelectorAll(".second-navbar li");

navbarItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    navbarItems.forEach((i) => i.classList.remove("active"));
    
    // Add active class to the clicked item
    item.classList.add("active");

    // Optional: Scroll to the clicked item (if needed)
    const itemPosition = item.offsetLeft;
    navbar.scrollTo({
      left: itemPosition - 50, // Offset a bit for padding
      behavior: "smooth"
    });
  });
});

const accordionToggle = document.querySelector(".accordion-toggle");
const accordionContent = document.querySelector(".accordion-content");
const icon = document.querySelector(".accordion-toggle i");

accordionToggle.addEventListener("click", function () {
  // Toggle content visibility
  if (accordionContent.style.display === "block") {
    accordionContent.style.display = "none";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    accordionContent.style.display = "block";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const partyPopper = new rive.Rive({
    src: "./assets/animation/Party-popper.riv",
    canvas: document.getElementById("partyPopper"),
    autoplay: true,
    onLoad: () => {
      partyPopper.resizeDrawingSurfaceToCanvas();
    },
  });
});
