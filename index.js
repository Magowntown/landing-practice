document.addEventListener("DOMContentLoaded" ,() => {
  // Select the hamburger button
  const hamburgerButton = document.querySelector(".hamburger");

  // Select the dropdown div (.ham-links)
  const hamLinks = document.querySelector(".ham-links");

  // Select the navbar
  const navbar = document.querySelector("#navbar");

  // Select the Menu and Close icons
  const menuIcon = document.querySelector(".menuIcon");
  const closeIcon = document.querySelector(".closeIcon");

  // Add click event listener on hamburger button
  hamburgerButton.addEventListener("click", () => {
    // Toggle display of dropdown div (.ham-links)
    if (hamLinks.style.display === "block") {
      hamLinks.style.display = "none";
    } else {
      hamLinks.style.display = "block";
      const navbarHeight = navbar.offsetHeight; // get the height of the navbar
      hamLinks.style.top = `${navbarHeight}px`; // set the top position of ham-links
    }

    // Toggle visibility of Menu and Close icons
    if (menuIcon.style.display === "none") {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });
});
