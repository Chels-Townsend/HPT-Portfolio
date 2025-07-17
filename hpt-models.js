// HPT Models Interactive Functionality
// File: hpt-models.js

// Model data for detailed views
const modelData = {
  gilbert: {
    title: "Gilbert's Behavior Engineering Model (BEM)",
    year: "1978",
    author: "Thomas F. Gilbert",
    overview:
      "Thomas Gilbert's Behavior Engineering Model is one of the foundational frameworks in HPT, providing a systematic approach to analyzing and improving human performance. The model is organized around six key factors that influence performance, arranged in order of their potential impact on performance improvement.",
    keyPrinciples: [
      "Environmental factors typically have greater leverage than individual factors",
      "Focus on accomplishments rather than behavior",
      "Systematic analysis prevents jumping to training solutions",
      "Cost-effectiveness through environmental interventions",
    ],
    factors: [
      {
        category: "Environmental Factors",
        items: [
          {
            name: "Information",
            description:
              "Clear expectations, relevant feedback, and adequate guidance for performance",
          },
          {
            name: "Resources",
            description:
              "Tools, time, materials, and other resources necessary for performance",
          },
          {
            name: "Incentives",
            description:
              "Financial and non-financial rewards that motivate desired behavior",
          },
        ],
      },
      {
        category: "Individual Factors",
        items: [
          {
            name: "Knowledge",
            description:
              "Skills, understanding, and competencies required for performance",
          },
          {
            name: "Capacity",
            description:
              "Individual's ability to learn and perform the required tasks",
          },
          {
            name: "Motives",
            description:
              "Internal drive and willingness to perform effectively",
          },
        ],
      },
    ],
    applications: [
      "Individual and team performance improvement",
      "Training needs analysis and design",
      "Performance consulting engagements",
      "Workplace productivity enhancement",
    ],
    strengths: [
      "Systematic and comprehensive approach",
      "Cost-effective solution identification",
      "Prevents over-reliance on training solutions",
      "Well-researched and validated framework",
    ],
    limitations: [
      "Less focus on organizational strategy",
      "May oversimplify complex organizational issues",
      "Requires skilled practitioner for effective application",
    ],
    practicalExample:
      "A sales team missing targets. BEM analysis reveals unclear commission structure (incentives), outdated CRM system (resources), and lack of performance feedback (information) - leading to environmental solutions rather than additional sales training.",
  },

  rummler: {
    title: "Rummler-Brache Performance Model",
    year: "1990",
    author: "Geary Rummler & Alan Brache",
    overview:
      "The Rummler-Brache Performance Model provides a comprehensive framework for analyzing and improving organizational performance by examining three levels: organization, process, and job/performer. This model emphasizes the interconnected nature of performance factors and the importance of alignment across all organizational levels.",
    keyPrinciples: [
      "Performance problems often have root causes at different organizational levels",
      "Alignment between strategy, processes, and individual performance is critical",
      "Process thinking drives organizational effectiveness",
      "Systems perspective prevents isolated solutions",
    ],
    factors: [
      {
        category: "Organization Level",
        items: [
          {
            name: "Strategy",
            description:
              "Clear organizational direction, goals, and strategic alignment",
          },
          {
            name: "Structure",
            description:
              "Organizational design that supports strategic objectives",
          },
          {
            name: "Goals",
            description: "Cascaded objectives throughout the organization",
          },
        ],
      },
      {
        category: "Process Level",
        items: [
          {
            name: "Workflow",
            description: "Efficient processes that deliver value to customers",
          },
          {
            name: "Interface",
            description:
              "Effective coordination between departments and functions",
          },
          {
            name: "Management",
            description: "Process ownership and continuous improvement",
          },
        ],
      },
      {
        category: "Job/Performer Level",
        items: [
          {
            name: "Roles",
            description: "Clear job descriptions and performance expectations",
          },
          {
            name: "Standards",
            description: "Measurable performance criteria and feedback",
          },
          {
            name: "Consequences",
            description: "Appropriate rewards and consequences for performance",
          },
        ],
      },
    ],
    applications: [
      "Organizational transformation initiatives",
      "Process improvement and reengineering",
      "Strategic alignment projects",
      "Large-scale change management",
    ],
    strengths: [
      "Comprehensive system-wide view",
      "Addresses interconnections between levels",
      "Prevents siloed thinking",
      "Strong focus on customer value",
    ],
    limitations: [
      "Complex implementation requiring significant resources",
      "May be overwhelming for smaller organizations",
      "Requires strong leadership commitment",
    ],
    practicalExample:
      "A manufacturing company experiencing quality issues discovers misaligned incentives (organization level), unclear handoff procedures (process level), and inadequate training (job level) - requiring coordinated interventions across all three levels.",
  },

  wile: {
    title: "Wile's Externality-Tangibility (E-T) Model",
    year: "1996",
    author: "David Wile",
    overview:
      "David Wile's Externality-Tangibility Model provides a systematic framework for front-end analysis by categorizing performance factors as either external or internal to the performer, with external factors further divided into tangible and intangible elements. This model helps practitioners conduct comprehensive cause analysis.",
    keyPrinciples: [
      "Performance deficiencies have multiple interconnected causes",
      "External factors often have greater impact than internal factors",
      "Systematic categorization prevents overlooking critical factors",
      "Tangible factors are easier to address than intangible ones",
    ],
    factors: [
      {
        category: "External Tangible Factors",
        items: [
          {
            name: "Tools & Technology",
            description:
              "Physical resources, equipment, and technological support systems",
          },
          {
            name: "Job Aids",
            description:
              "Written procedures, checklists, and performance support materials",
          },
          {
            name: "Environment",
            description:
              "Physical workspace, facilities, and environmental conditions",
          },
        ],
      },
      {
        category: "External Intangible Factors",
        items: [
          {
            name: "Information Flow",
            description:
              "Communication patterns, feedback systems, and information availability",
          },
          {
            name: "Management Support",
            description:
              "Leadership style, organizational culture, and supervisory practices",
          },
          {
            name: "Incentive Systems",
            description:
              "Reward structures, recognition programs, and motivational factors",
          },
        ],
      },
      {
        category: "Internal Factors",
        items: [
          {
            name: "Knowledge & Skills",
            description:
              "Technical competencies, experience, and learned capabilities",
          },
          {
            name: "Talents & Abilities",
            description:
              "Natural aptitudes, cognitive abilities, and personal characteristics",
          },
          {
            name: "Motivation",
            description:
              "Personal drive, commitment, and willingness to perform",
          },
        ],
      },
    ],
    applications: [
      "Comprehensive front-end analysis",
      "Complex performance problem diagnosis",
      "Multi-factor intervention design",
      "Academic and educational performance improvement",
    ],
    strengths: [
      "Systematic and thorough analysis approach",
      "Prevents overlooking environmental factors",
      "Useful for complex, multi-causal problems",
      "Guides comprehensive intervention strategies",
    ],
    limitations: [
      "Can be time-consuming for simple problems",
      "Requires significant analytical skills",
      "May identify more factors than can be practically addressed",
    ],
    practicalExample:
      "Analysis of distance education faculty performance reveals interconnected issues: inadequate LMS tools (external tangible), poor communication with students (external intangible), and insufficient online pedagogy knowledge (internal) - requiring multi-level interventions.",
  },

  mager: {
    title: "Mager & Pipe's Performance Analysis Model",
    year: "1984",
    author: "Robert Mager & Peter Pipe",
    overview:
      "Mager and Pipe's Performance Analysis Model provides a flowchart approach to performance analysis, helping practitioners systematically determine whether performance problems are due to skill deficiencies or other factors through a series of diagnostic questions.",
    keyPrinciples: [
      "Distinguish between 'can't do' and 'won't do' problems",
      "Systematic questioning prevents assumptions about causes",
      "Simple decision-tree structure guides analysis",
      "Focus on most cost-effective interventions first",
    ],
    factors: [
      {
        category: "Initial Assessment",
        items: [
          {
            name: "Performance Importance",
            description:
              "Is the performance problem worth solving given its impact and cost?",
          },
          {
            name: "Skill Deficiency",
            description:
              "Is the poor performance due to a lack of knowledge or skill?",
          },
          {
            name: "Life-or-Death Test",
            description:
              "Could the person perform if their life depended on it?",
          },
        ],
      },
      {
        category: "Skill Deficiency Path",
        items: [
          {
            name: "Past Performance",
            description:
              "Has the person ever performed the task successfully before?",
          },
          {
            name: "Task Frequency",
            description:
              "Is the task performed often enough to maintain proficiency?",
          },
          {
            name: "Feedback Quality",
            description:
              "Does the person receive adequate feedback about performance?",
          },
        ],
      },
      {
        category: "Non-Skill Deficiency Path",
        items: [
          {
            name: "Performance Punishment",
            description: "Is the person punished for performing correctly?",
          },
          {
            name: "Non-Performance Reward",
            description: "Is the person rewarded for not performing?",
          },
          {
            name: "Performance Obstacles",
            description: "Are there obstacles preventing good performance?",
          },
        ],
      },
    ],
    applications: [
      "Quick performance problem diagnosis",
      "Training needs analysis",
      "Individual performance coaching",
      "Preliminary assessment before detailed analysis",
    ],
    strengths: [
      "Simple and easy to follow process",
      "Prevents jumping to training solutions",
      "Cost-effective diagnostic tool",
      "Good for novice practitioners",
    ],
    limitations: [
      "Oversimplifies complex problems",
      "Binary decision-making may miss nuances",
      "Limited depth for organizational issues",
    ],
    practicalExample:
      "Employee missing deadlines: Life-or-death test reveals they can meet deadlines when necessary, leading to analysis of time management tools (obstacles) and workload distribution (rewards for non-performance) rather than time management training.",
  },

  kaufman: {
    title: "Kaufman's Organizational Elements Model",
    year: "1992",
    author: "Roger Kaufman",
    overview:
      "Kaufman's Organizational Elements Model focuses on the alignment between organizational inputs, processes, products, outputs, and outcomes, emphasizing an outside-in approach that starts with societal outcomes and works backward to determine required organizational elements.",
    keyPrinciples: [
      "Start with societal value and work backward",
      "Alignment between all organizational elements is critical",
      "Focus on results, not just activities",
      "Strategic thinking drives performance improvement",
    ],
    factors: [
      {
        category: "Mega Level (Societal)",
        items: [
          {
            name: "Outcomes",
            description:
              "Societal consequences and value created for the broader community",
          },
          {
            name: "Social Impact",
            description:
              "Long-term effects on society, environment, and future generations",
          },
          {
            name: "Stakeholder Value",
            description:
              "Benefits delivered to all stakeholders including society",
          },
        ],
      },
      {
        category: "Macro Level (Organizational)",
        items: [
          {
            name: "Outputs",
            description:
              "Products and services delivered to external clients and customers",
          },
          {
            name: "Organizational Results",
            description:
              "Measurable organizational accomplishments and achievements",
          },
          {
            name: "External Satisfaction",
            description:
              "Customer and stakeholder satisfaction with organizational outputs",
          },
        ],
      },
      {
        category: "Micro Level (Individual/Process)",
        items: [
          {
            name: "Products",
            description:
              "Internal results and deliverables from organizational processes",
          },
          {
            name: "Process Efficiency",
            description:
              "Internal operational effectiveness and resource utilization",
          },
          {
            name: "Inputs",
            description:
              "Resources, materials, and capabilities brought into the organization",
          },
        ],
      },
    ],
    applications: [
      "Strategic planning and alignment",
      "Social impact and sustainability initiatives",
      "Organizational mission and vision development",
      "Performance measurement system design",
    ],
    strengths: [
      "Strong focus on societal value",
      "Outside-in strategic perspective",
      "Comprehensive alignment approach",
      "Long-term orientation",
    ],
    limitations: [
      "Abstract concepts difficult to operationalize",
      "May not address immediate performance problems",
      "Requires significant organizational maturity",
    ],
    practicalExample:
      "Healthcare organization redesigns services by first identifying community health outcomes (mega), then aligning patient satisfaction metrics (macro) with clinical process improvements (micro) to ensure societal value creation.",
  },
};

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeModelButtons();
  initializeCompareButton();
  initializeAnimations();
});

// Initialize model button functionality
function initializeModelButtons() {
  const modelButtons = document.querySelectorAll(".model-button");

  modelButtons.forEach((button) => {
    // Click to open detailed modal
    button.addEventListener("click", function () {
      const modelKey = this.getAttribute("data-model");
      openModelModal(modelKey);
    });
  });
}

// Function to open detailed model modal
function openModelModal(modelKey) {
  const model = modelData[modelKey];
  if (!model) return;

  const modal = createModal();
  const modalContent = createModalContent(model);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  setupModalClosing(modal);
}

// Create base modal element
function createModal() {
  const modal = document.createElement("div");
  modal.className = "hpt-modal";
  return modal;
}

// Create modal content with model details
function createModalContent(model) {
  const modalContent = document.createElement("div");
  modalContent.className = "hpt-modal-content";

  modalContent.innerHTML = `
    <div class="hpt-modal-header">
      <div>
        <h2 class="hpt-modal-title">${model.title}</h2>
        <p class="hpt-modal-subtitle">${model.author} (${model.year})</p>
      </div>
      <button id="closeModal" class="hpt-modal-close">×</button>
    </div>

    ${createOverviewSection(model)}
    ${createPrinciplesAndApplications(model)}
    ${createModelComponents(model)}
    ${createStrengthsAndLimitations(model)}
    ${createPracticalExample(model)}
  `;

  return modalContent;
}

// Create overview section
function createOverviewSection(model) {
  return `
    <div class="hpt-modal-overview">
      <h3>Overview</h3>
      <p>${model.overview}</p>
    </div>
  `;
}

// Create principles and applications sections
function createPrinciplesAndApplications(model) {
  return `
    <div class="hpt-modal-grid">
      <div class="hpt-modal-section">
        <h3>Key Principles</h3>
        <ul>
          ${model.keyPrinciples
            .map((principle) => `<li>${principle}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="hpt-modal-section">
        <h3>Applications</h3>
        <ul>
          ${model.applications.map((app) => `<li>${app}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

// Create model components section
function createModelComponents(model) {
  return `
    <div class="hpt-model-components">
      <h3>Model Components</h3>
      ${model.factors
        .map(
          (category) => `
        <div class="hpt-component-category">
          <div class="hpt-component-header">
            <h4>${category.category}</h4>
          </div>
          <div class="hpt-component-body">
            <div class="hpt-component-grid">
              ${category.items
                .map(
                  (item) => `
                <div class="hpt-component-item">
                  <h5>${item.name}</h5>
                  <p>${item.description}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// Create strengths and limitations section
function createStrengthsAndLimitations(model) {
  return `
    <div class="hpt-modal-grid">
      <div class="hpt-strengths">
        <h3>Strengths</h3>
        <ul>
          ${model.strengths.map((strength) => `<li>${strength}</li>`).join("")}
        </ul>
      </div>
      <div class="hpt-limitations">
        <h3>Limitations</h3>
        <ul>
          ${model.limitations
            .map((limitation) => `<li>${limitation}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
  `;
}

// Create practical example section
function createPracticalExample(model) {
  return `
    <div class="hpt-practical-example">
      <h3>💡 Practical Example</h3>
      <p>${model.practicalExample}</p>
    </div>
  `;
}

// Setup modal closing functionality
function setupModalClosing(modal) {
  const closeBtn = modal.querySelector("#closeModal");

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(modal);
  });

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Close modal with Escape key
  const escapeHandler = function (e) {
    if (e.key === "Escape" && document.body.contains(modal)) {
      document.body.removeChild(modal);
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
}

// Initialize compare models button
function initializeCompareButton() {
  const compareButton = document.getElementById("compareModelsBtn");
  if (!compareButton) return;

  compareButton.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
  });

  compareButton.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  });

  compareButton.addEventListener("click", openComparisonModal);
}

// Open comparison modal
function openComparisonModal() {
  const modal = createModal();
  const comparisonContent = createComparisonContent();

  modal.appendChild(comparisonContent);
  document.body.appendChild(modal);

  setupComparisonModalClosing(modal);
}

// Create comparison modal content
function createComparisonContent() {
  const comparisonContent = document.createElement("div");
  comparisonContent.className = "hpt-comparison-content";

  comparisonContent.innerHTML = `
    <div class="hpt-comparison-header">
      <h2>HPT Models Comparison</h2>
      <button id="closeModal" class="hpt-modal-close">×</button>
    </div>
    
    <div class="hpt-comparison-table-container">
      <table class="hpt-comparison-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Primary Focus</th>
            <th>Best Use Cases</th>
            <th>Key Strengths</th>
            <th>Limitations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gilbert's BEM</td>
            <td>Environmental vs. Individual factors</td>
            <td>Individual/team performance issues, skill vs. environmental problems</td>
            <td>Systematic factor analysis, Cost-effective solutions</td>
            <td>Less focus on organizational strategy</td>
          </tr>
          <tr>
            <td>Rummler-Brache</td>
            <td>Organizational alignment across levels</td>
            <td>Organizational transformation, Process improvement</td>
            <td>Comprehensive system view, Multi-level analysis</td>
            <td>Complex implementation, Resource intensive</td>
          </tr>
          <tr>
            <td>Wile's E-T Model</td>
            <td>External vs. Internal factor categorization</td>
            <td>Complex cause analysis, Front-end analysis</td>
            <td>Comprehensive categorization, Systematic approach</td>
            <td>Time-consuming, May identify too many factors</td>
          </tr>
          <tr>
            <td>Mager & Pipe</td>
            <td>Decision-tree performance analysis</td>
            <td>Quick performance diagnosis, Training needs analysis</td>
            <td>Simple flowchart, Easy to follow</td>
            <td>Limited depth, Binary decision making</td>
          </tr>
          <tr>
            <td>Kaufman's OEM</td>
            <td>Societal outcomes and alignment</td>
            <td>Strategic planning, Social impact initiatives</td>
            <td>Outside-in perspective, Societal value focus</td>
            <td>Abstract concepts, Long-term focus</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="hpt-selection-guide">
      <h3>Model Selection Guide</h3>
      <p><strong>For Individual Performance Issues:</strong> Start with Gilbert's BEM</p>
      <p><strong>For Organizational Change:</strong> Use Rummler-Brache Model</p>
      <p><strong>For Complex Cause Analysis:</strong> Apply Wile's E-T Model</p>
      <p><strong>For Quick Diagnosis:</strong> Apply Mager & Pipe's flowchart</p>
      <p><strong>For Strategic Alignment:</strong> Consider Kaufman's OEM</p>
    </div>
  `;

  return comparisonContent;
}

// Setup comparison modal closing
function setupComparisonModalClosing(modal) {
  const closeBtn = modal.querySelector("#closeModal");

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(modal);
  });

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Close modal with Escape key
  const escapeHandler = function (e) {
    if (e.key === "Escape" && document.body.contains(modal)) {
      document.body.removeChild(modal);
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
}

// Initialize animations
function initializeAnimations() {
  // Add fade-in animation for content
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedElements = document.querySelectorAll(
    ".model-button, .highlight-box"
  );
  animatedElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(element);
  });
}

// Utility function to handle responsive modal sizing
function adjustModalForMobile() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    const modals = document.querySelectorAll(
      ".hpt-modal, .hpt-comparison-content"
    );
    modals.forEach((modal) => {
      modal.classList.add("mobile-responsive");
    });
  }
}

// Add resize listener for mobile responsiveness
window.addEventListener("resize", adjustModalForMobile);

// Export functions for potential external use
window.HPTModels = {
  openModelModal,
  openComparisonModal,
  modelData,
};
