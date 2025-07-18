// Job Aid Interactive Functionality
// File: js/job-aid-interactions.js

// Initialize job aid interactions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeJobAidInteractions();
});

// Initialize interactive elements for the job aid
function initializeJobAidInteractions() {
  const jobAidSteps = document.querySelectorAll(".job-aid h3");

  jobAidSteps.forEach((step) => {
    setupStepInteractions(step);
  });
}

// Setup interactions for individual job aid steps
function setupStepInteractions(step) {
  // Add click handler for expand/collapse
  step.addEventListener("click", function () {
    toggleStepContent(this);
  });

  // Add keyboard support
  step.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleStepContent(this);
    }
  });

  // Style the step as clickable
  step.style.cursor = "pointer";
  step.style.userSelect = "none";
  step.setAttribute("tabindex", "0");
  step.setAttribute("role", "button");
  step.setAttribute("aria-expanded", "false");
  step.setAttribute("aria-label", `Toggle ${step.textContent} details`);

  // Add visual indicator
  addToggleIndicator(step);

  // Start collapsed - hide the content initially
  const nextElement = step.nextElementSibling;
  if (nextElement && nextElement.tagName === "P") {
    nextElement.style.display = "none";
  }
}

// Toggle visibility of step content
function toggleStepContent(step) {
  const nextElement = step.nextElementSibling;

  if (nextElement && nextElement.tagName === "P") {
    const isHidden = nextElement.style.display === "none";

    // Toggle visibility
    nextElement.style.display = isHidden ? "block" : "none";

    // Update arrow indicator
    updateToggleIndicator(step, !isHidden);

    // Update accessibility attributes
    step.setAttribute("aria-expanded", isHidden ? "true" : "false");
  }
}

// Add arrow indicator to step headings
function addToggleIndicator(step) {
  const arrow = document.createElement("span");
  arrow.innerHTML = " ▼"; // Use down arrow and rotate it
  arrow.className = "toggle-arrow";
  arrow.style.fontSize = "0.8em";
  arrow.style.transition = "transform 0.3s ease";
  arrow.style.display = "inline-block";
  arrow.style.transform = "rotate(-90deg)"; // Start rotated (collapsed state)
  arrow.setAttribute("aria-hidden", "true");

  step.appendChild(arrow);
}

// Update arrow indicator based on expanded state
function updateToggleIndicator(step, isCollapsed) {
  const arrow = step.querySelector(".toggle-arrow");
  if (arrow) {
    arrow.style.transform = isCollapsed ? "rotate(-90deg)" : "rotate(0deg)";
  }
}

// Export functions for potential external use
window.JobAidInteractions = {
  initializeJobAidInteractions,
  toggleStepContent,
};
