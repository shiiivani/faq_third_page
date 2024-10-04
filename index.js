document.addEventListener("DOMContentLoaded", function () {
  // Select all instances of scroll buttons and navbar containers
  const navContainers = document.querySelectorAll(".second-navbar-container");

  navContainers.forEach((container) => {
    const scrollLeftButton = container.querySelector(".scroll-left");
    const scrollRightButton = container.querySelector(".scroll-right");
    const navbar = container.querySelector(".second-navbar ul"); // updated to target 'ul'

    function updateScrollButtons() {
      const isScrollable = navbar.scrollWidth > navbar.clientWidth;
      // Show buttons regardless of scrollable state
      scrollLeftButton.style.display = "block";
      scrollRightButton.style.display = "block";
      // Hide buttons if the navbar isn't scrollable
      if (!isScrollable) {
        scrollLeftButton.style.display = "none";
        scrollRightButton.style.display = "none";
      }
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
    updateScrollButtons(); // Ensure buttons are properly displayed initially
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarItems = document.querySelectorAll(".second-navbar li");

  navbarItems.forEach((item) => {
    item.addEventListener("click", function () {
      navbarItems.forEach((i) => i.classList.remove("active"));

      item.classList.add("active");

      const itemPosition = item.offsetLeft;
      navbar.scrollTo({
        left: itemPosition - 50,
        behavior: "smooth",
      });
    });
  });
});
