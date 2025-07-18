// References Modal JavaScript
// File: references-modal.js

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeReferencesButton();
});

// Initialize references button functionality
function initializeReferencesButton() {
  const referencesBtn = document.getElementById("referencesBtn");

  if (referencesBtn) {
    referencesBtn.addEventListener("click", openReferencesModal);

    // Add hover effects
    referencesBtn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
    });

    referencesBtn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    });
  }
}

// Open references modal
function openReferencesModal() {
  const modal = document.createElement("div");
  modal.className = "references-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "references-modal-content";

  modalContent.innerHTML = createReferencesContent();

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  setupReferencesModalClosing(modal);
  animateReferenceCategories(modal);
}

// Create the main references content
function createReferencesContent() {
  return `
        <div class="references-modal-header">
            <h2 class="references-modal-title"> References & Resources</h2>
            <button id="closeReferencesModal" class="references-close">×</button>
        </div>

        <div class="references-intro">
            <p>This collection represents key resources in Human Performance Technology, including foundational texts, professional organizations, research publications, and practical tools that inform evidence-based HPT practice.</p>
        </div>

        <!-- Core HPT Literature -->
        <div class="reference-category">
            <div class="reference-category-header">
                <h3>Foundational HPT Literature</h3>
            </div>
            <div class="reference-category-body">
                <div class="reference-item">
                    <div class="reference-citation">
                        Gilbert, T. F. (1978). <em>Human Competence: Engineering Worthy Performance</em>. McGraw-Hill.
                    </div>
                    <div class="reference-description">
                        Foundational text introducing the Behavior Engineering Model and principles of human performance technology. Essential reading for understanding systematic performance improvement.
                    </div>
                </div>
                
                <div class="reference-item">
                    <div class="reference-citation">
                        Rummler, G. A., & Brache, A. P. (1995). <em>Improving Performance: How to Manage the White Space on the Organization Chart</em> (2nd ed.). Jossey-Bass.
                    </div>
                    <div class="reference-description">
                        Comprehensive guide to organizational performance improvement through process and systems thinking. Introduces the three-level performance model.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Mager, R. F., & Pipe, P. (1984). <em>Analyzing Performance Problems: Or You Really Oughta Wanna</em> (2nd ed.). Lake Publishing Company.
                    </div>
                    <div class="reference-description">
                        Practical decision-tree approach to performance analysis, helping practitioners distinguish between skill deficiencies and environmental factors.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Stolovitch, H. D., & Keeps, E. J. (Eds.). (1999). <em>Handbook of Human Performance Technology</em> (2nd ed.). Jossey-Bass.
                    </div>
                    <div class="reference-description">
                        Comprehensive handbook covering HPT principles, models, and applications across various organizational contexts.
                    </div>
                </div>
            </div>
        </div>

        <!-- Professional Organizations -->
        <div class="reference-category">
            <div class="reference-category-header">
                <h3>Professional Organizations & Standards</h3>
            </div>
            <div class="reference-category-body">
                <div class="reference-item">
                    <div class="reference-citation">
                        International Society for Performance Improvement (ISPI)
                    </div>
                    <div class="reference-description">
                        Leading professional association for HPT practitioners worldwide, providing certification, standards, and professional development opportunities.
                    </div>
                    <a href="https://www.ispi.org" target="_blank" class="reference-link">Visit ISPI Website</a>
                </div>


                <div class="reference-item">
                    <div class="reference-citation">
                        Association for Talent Development (ATD)
                    </div>
                    <div class="reference-description">
                        Professional organization supporting learning and development professionals, offering resources on performance improvement and workplace learning.
                    </div>
                    <a href="https://www.td.org" target="_blank" class="reference-link">Visit ATD Website</a>
                </div>
            </div>
        </div>

        <!-- Case Studies & Research -->
        <div class="reference-category">
            <div class="reference-category-header">
                <h3>Case Studies & Applied Research</h3>
            </div>
            <div class="reference-category-body">
                            <div class="reference-item">
                    <div class="reference-citation">
                        Wilmoth, F. S., Prigmore, C., & Bray, M. (2010) HPT Models: An Overview of the Major Models in the Field. <em>Handbook of Performance in the Workplace, Volume 2</em>, 5-25.
                    </div>
                    <div class="reference-description">
                        Comprehensive overview of the primary HPT models used in the field, providing practitioners with guidance on selecting and applying appropriate frameworks for performance improvement initiatives.
                    </div>
                </div>
                <div class="reference-item">
                    <div class="reference-citation">
                        Kara, M., & Yildirim, Z. (2021). Faculty Performance Improvement in Distance Education: Causes of the Performance Deficiencies (Part I) <em>Performance Improvement Quarterly</em>, 34(4), 573-601.
                    </div>
                    <div class="reference-description">
                        Application of Wile's E-T model to analyze performance barriers in distance education, demonstrating systematic front-end analysis methodology.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Swart, W., & Kaufman, R. (2009). Developing Performance Data for Making Useful Faculty and Leadership Decisions: Needs Assessment as a Vehicle. <em>Performance Improvement Quarterly</em>, 22(3), 71-82.
                    </div>
                    <div class="reference-description">
                        Methodology for converting qualitative faculty perceptions into quantitative performance data for evidence-based academic improvement.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Van Tiem, D. M., Moseley, J. L., & Dessinger, J. C. (2004). <em>Fundamentals of Performance Technology: A Guide to Improving People, Process, and Performance</em> (2nd ed.). Pfeiffer. Chpt 2, 6-17.
                    </div>
                    <div class="reference-description">
                        Practical guide covering HPT fundamentals with real-world case studies and implementation strategies.
                    </div>
                </div>
                
            </div>
        </div>

        <!-- Performance Models & Tools -->
        <div class="reference-category">
            <div class="reference-category-header">
                <h3>Performance Models & Assessment Tools</h3>
            </div>
            <div class="reference-category-body">
                <div class="reference-item">
                    <div class="reference-citation">
                        Kaufman, R. (1992). <em>Strategic Planning Plus: An Organizational Guide</em>. Sage Publications.
                    </div>
                    <div class="reference-description">
                        Introduction to the Organizational Elements Model and outside-in strategic planning approach focusing on societal value creation.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Wile, D. (1996). Why doers do. <em>Performance & Instruction</em>, 35(2), 30-35.
                    </div>
                    <div class="reference-description">
                        Original article introducing the Externality-Tangibility model for systematic performance analysis and cause identification.
                    </div>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        Chevalier, R. (2003). <em>A Manager's Guide to Improving Workplace Performance</em>. AMACOM.
                    </div>
                    <div class="reference-description">
                        Practical tools and techniques for managers implementing performance improvement initiatives in organizational settings.
                    </div>
                </div>
            </div>
        </div>

        <!-- Journals & Publications -->
        <div class="reference-category">
            <div class="reference-category-header">
                <h3>Academic Journals & Publications</h3>
            </div>
            <div class="reference-category-body">
                <div class="reference-item">
                    <div class="reference-citation">
                        <em>Performance Improvement</em> - Wiley/ISPI
                    </div>
                    <div class="reference-description">
                        Official journal of ISPI, publishing research and case studies in human performance technology and organizational improvement.
                    </div>
                    <a href="https://meridian.allenpress.com/pfi" target="_blank" class="reference-link">Access Journal</a>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        <em>Performance Improvement Quarterly</em> - Wiley/ISPI
                    </div>
                    <div class="reference-description">
                        Peer-reviewed research journal focusing on empirical studies in performance technology and workplace learning.
                    </div>
                    <a href="https://meridian.allenpress.com/piq" target="_blank" class="reference-link">Access Journal</a>
                </div>

                <div class="reference-item">
                    <div class="reference-citation">
                        <em>Educational Technology Research and Development</em> - Springer
                    </div>
                    <div class="reference-description">
                        Research journal covering instructional design, educational technology, and performance improvement in educational contexts.
                    </div>
                    <a href="https://link.springer.com/journal/11423" target="_blank" class="reference-link">Access Journal</a>
                </div>
            </div>
        </div>
    `;
}

// Setup modal closing functionality
function setupReferencesModalClosing(modal) {
  const closeBtn = modal.querySelector("#closeReferencesModal");

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(modal);
  });

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

// Animate reference categories on load
function animateReferenceCategories(modal) {
  setTimeout(() => {
    const categories = modal.querySelectorAll(".reference-category");
    categories.forEach((category, index) => {
      setTimeout(() => {
        category.classList.add("animate");
      }, index * 100);
    });
  }, 100);
}

// Export functions for potential external use
window.ReferencesModal = {
  openReferencesModal,
  initializeReferencesButton,
};
