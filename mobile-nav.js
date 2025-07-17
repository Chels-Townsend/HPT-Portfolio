// Mobile Navigation Hamburger Menu Script
// This script provides responsive navigation functionality for the HPT Portfolio website

document.addEventListener("DOMContentLoaded", function () {
  // Create hamburger menu button
  function createHamburgerMenu() {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");

    // Create hamburger button
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
    hamburger.setAttribute("aria-label", "Toggle navigation menu");
    hamburger.setAttribute("aria-expanded", "false");

    // Insert hamburger button before nav links
    nav.appendChild(hamburger);

    // Add mobile class to nav links
    navLinks.classList.add("nav-links-mobile");

    return hamburger;
  }

  // Toggle mobile menu
  function toggleMobileMenu(hamburger, navLinks) {
    hamburger.addEventListener("click", function () {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

      // Toggle hamburger animation
      hamburger.classList.toggle("active");

      // Toggle nav links visibility
      navLinks.classList.toggle("active");

      // Update accessibility attributes
      hamburger.setAttribute("aria-expanded", !isExpanded);

      // Prevent body scroll when menu is open
      document.body.style.overflow = navLinks.classList.contains("active")
        ? "hidden"
        : "";
    });
  }

  // Close mobile menu when clicking on a link
  function setupLinkHandlers(navLinks) {
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        const hamburger = document.querySelector(".hamburger");
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Close mobile menu when clicking outside
  function setupOutsideClickHandler(navLinks) {
    document.addEventListener("click", function (e) {
      const hamburger = document.querySelector(".hamburger");
      const nav = document.querySelector("nav");

      if (!nav.contains(e.target) && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // Handle window resize
  function setupResizeHandler(navLinks) {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        const hamburger = document.querySelector(".hamburger");
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // Handle escape key
  function setupKeyboardHandlers(navLinks) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        const hamburger = document.querySelector(".hamburger");
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // Initialize mobile navigation
  function initMobileNavigation() {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;

    const hamburger = createHamburgerMenu();
    toggleMobileMenu(hamburger, navLinks);
    setupLinkHandlers(navLinks);
    setupOutsideClickHandler(navLinks);
    setupResizeHandler(navLinks);
    setupKeyboardHandlers(navLinks);
  }

  // Initialize the mobile navigation
  initMobileNavigation();

  // Add smooth scrolling for anchor links (if any)
  function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  setupSmoothScrolling();

  // Add loading animation
  function addLoadingAnimation() {
    const content = document.querySelector(".content");
    if (content) {
      content.style.opacity = "0";
      content.style.transform = "translateY(20px)";

      setTimeout(() => {
        content.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
      }, 100);
    }
  }

  addLoadingAnimation();

  // Add focus management for accessibility
  function setupFocusManagement() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          hamburger.click();
        }
      });

      // Focus first link when menu opens
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            if (navLinks.classList.contains("active")) {
              const firstLink = navLinks.querySelector("a");
              if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
              }
            }
          }
        });
      });

      observer.observe(navLinks, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  }

  setupFocusManagement();
});

// Export functions for potential use in other scripts
window.HPTNavigation = {
  closeMenu: function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  },

  openMenu: function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      navLinks.classList.add("active");
      hamburger.classList.add("active");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  },
};
