// ISPI Standards Interactive Functionality
// File: js/ispi-standards.js

// ISPI Standards data for each card
const standardsData = {
  analysis: {
    title: "Performance Analysis Standards",
    color: "#4caf50",
    components: [
      {
        name: "Needs Assessment",
        description:
          "Ability to systematically determine gaps between current and desired performance states",
      },
      {
        name: "Cause Analysis",
        description:
          "Skill in identifying root causes of performance problems using systematic methodologies",
      },
      {
        name: "Environmental Analysis",
        description:
          "Understanding of organizational factors that influence performance",
      },
      {
        name: "Gap Analysis",
        description:
          "Competency in measuring and quantifying performance differences",
      },
    ],
  },
  design: {
    title: "Intervention Design Standards",
    color: "#ff9800",
    components: [
      {
        name: "Instructional Design",
        description:
          "Expertise in creating learning experiences that address skill and knowledge gaps",
      },
      {
        name: "Non-Instructional Solutions",
        description:
          "Ability to design environmental and motivational interventions",
      },
      {
        name: "Change Management",
        description:
          "Knowledge of organizational change principles and implementation strategies",
      },
      {
        name: "Solution Selection",
        description:
          "Skill in choosing appropriate interventions based on cause analysis results",
      },
    ],
  },
  evaluation: {
    title: "Evaluation Standards",
    color: "#9c27b0",
    components: [
      {
        name: "Evaluation Design",
        description:
          "Ability to create comprehensive evaluation strategies and methodologies",
      },
      {
        name: "Data Collection",
        description:
          "Expertise in gathering quantitative and qualitative performance data",
      },
      {
        name: "ROI Analysis",
        description:
          "Skill in calculating return on investment and demonstrating business impact",
      },
      {
        name: "Results Interpretation",
        description:
          "Competency in analyzing data and drawing meaningful conclusions",
      },
    ],
  },
  management: {
    title: "Management Standards",
    color: "#f44336",
    components: [
      {
        name: "Project Planning",
        description:
          "Ability to develop comprehensive project plans and timelines",
      },
      {
        name: "Resource Allocation",
        description:
          "Skill in managing budgets, personnel, and other project resources",
      },
      {
        name: "Stakeholder Management",
        description:
          "Expertise in building relationships and managing diverse stakeholder needs",
      },
      {
        name: "Communication",
        description:
          "Ability to effectively communicate results and recommendations to all organizational levels",
      },
    ],
  },
};

// Initialize ISPI Standards functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeISPIStandards();
});

// Initialize ISPI Standards interactive elements
function initializeISPIStandards() {
  const standardCards = document.querySelectorAll(".clickable-standard");

  standardCards.forEach((card) => {
    setupCardInteractions(card);
  });
}

// Setup interactions for individual standard cards
function setupCardInteractions(card) {
  // Add hover effects
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
    this.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
    this.style.cursor = "pointer";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
  });

  // Add click handler
  card.addEventListener("click", function () {
    const standardType = this.getAttribute("data-standard");
    openStandardModal(standardType);
  });

  // Add keyboard support
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const standardType = this.getAttribute("data-standard");
      openStandardModal(standardType);
    }
  });

  // Make card focusable
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    `View details for ${card.querySelector("h3").textContent}`
  );
}

// Function to open individual standard modal
function openStandardModal(standardType) {
  const standard = standardsData[standardType];
  if (!standard) return;

  // Create modal
  const modal = createStandardModal(standard);
  document.body.appendChild(modal);

  // Setup modal functionality
  setupStandardModalClosing(modal);
  animateModalComponents(modal);

  // Focus management
  const closeButton = modal.querySelector(".standard-modal-close");
  closeButton.focus();
}

// Create the standard modal element
function createStandardModal(standard) {
  const modal = document.createElement("div");
  modal.className = "standard-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "standard-modal-content";
  modalContent.style.setProperty("--standard-color", standard.color);

  modalContent.innerHTML = createStandardModalHTML(standard);

  modal.appendChild(modalContent);
  return modal;
}

// Generate HTML for standard modal content
function createStandardModalHTML(standard) {
  return `
    <div class="standard-modal-header">
      <h2 class="standard-modal-title">${standard.title}</h2>
      <button class="standard-modal-close" aria-label="Close modal">×</button>
    </div>

    <div class="standard-components">
      <h3>Core Components</h3>
      <div class="components-grid">
        ${standard.components
          .map(
            (component) => `
          <div class="component-card">
            <h4 class="component-name">${component.name}</h4>
            <p class="component-description">${component.description}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Setup modal closing functionality
function setupStandardModalClosing(modal) {
  const closeBtn = modal.querySelector(".standard-modal-close");

  // Close button click handler
  closeBtn.addEventListener("click", function () {
    closeStandardModal(modal);
  });

  // Close button hover effects
  closeBtn.addEventListener("mouseenter", function () {
    this.style.background = "#c62828";
    this.style.transform = "scale(1.1)";
  });

  closeBtn.addEventListener("mouseleave", function () {
    this.style.background = "#e74c3c";
    this.style.transform = "scale(1)";
  });

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeStandardModal(modal);
    }
  });

  // Close modal with Escape key
  const escapeHandler = function (e) {
    if (e.key === "Escape" && document.body.contains(modal)) {
      closeStandardModal(modal);
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
}

// Close modal and clean up
function closeStandardModal(modal) {
  if (document.body.contains(modal)) {
    document.body.removeChild(modal);
  }
}

// Animate modal components on load
function animateModalComponents(modal) {
  setTimeout(() => {
    const componentCards = modal.querySelectorAll(".component-card");
    componentCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 100);
    });
  }, 100);
}

// Export functions for potential external use
window.ISPIStandards = {
  openStandardModal,
  initializeISPIStandards,
  standardsData,
};
