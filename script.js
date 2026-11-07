'use strict';

/**
 * element toggle function
 */
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };

/**
 * ============================================
 * SIDEBAR
 * ============================================
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

/**
 * ============================================
 * SCROLL REVEAL - Intersection Observer
 * ============================================
 */
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px -30px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/**
 * ============================================
 * SKILL BARS - Animate on scroll
 * ============================================
 */
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.dataset.width || '0';
      entry.target.style.width = width + '%';
      entry.target.classList.add('animated');
      skillBarObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

skillBars.forEach(bar => skillBarObserver.observe(bar));

/**
 * ============================================
 * BACK TO TOP BUTTON
 * ============================================
 */
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/**
 * ============================================
 * CONTACT FORM
 * ============================================
 */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const originalBtnContent = formBtn.innerHTML;
    formBtn.innerHTML = '<ion-icon name="sync-outline" class="rotating"></ion-icon><span>Sending...</span>';
    formBtn.setAttribute("disabled", "");

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          formBtn.innerHTML = '<ion-icon name="checkmark-done-outline"></ion-icon><span>Message Sent!</span>';
          formBtn.style.background = "linear-gradient(135deg, hsl(45, 100%, 72%), hsl(35, 100%, 60%))";
          formBtn.style.color = "var(--smoky-black)";
          formBtn.style.borderColor = "transparent";
          form.reset();
          setTimeout(() => {
            formBtn.innerHTML = originalBtnContent;
            formBtn.style.background = "";
            formBtn.style.color = "";
            formBtn.style.borderColor = "";
            formBtn.setAttribute("disabled", "");
          }, 5000);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        formBtn.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon><span>Error! Try again.</span>';
        setTimeout(() => {
          formBtn.innerHTML = originalBtnContent;
          formBtn.removeAttribute("disabled");
        }, 5000);
      });
  });
}

/**
 * ============================================
 * SINGLE PAGE NAVIGATION & SCROLLSPY
 * ============================================
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("article[id]");

let isClickScrolling = false;
let scrollTimeout;

const setActiveNavLink = function (targetId) {
  navigationLinks.forEach(link => {
    const linkTarget = link.dataset.navLink || (link.getAttribute("href") ? link.getAttribute("href").replace("#", "") : "");
    if (linkTarget === targetId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const scrollToSection = function (targetId) {
  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;

  const isDesktop = window.innerWidth >= 1024;
  const navbarOffset = isDesktop ? 80 : 25;
  const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

  isClickScrolling = true;
  clearTimeout(scrollTimeout);
  setActiveNavLink(targetId);

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });

  scrollTimeout = setTimeout(() => {
    isClickScrolling = false;
  }, 800);
};

navigationLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.dataset.navLink || (this.getAttribute("href") ? this.getAttribute("href").replace("#", "") : "");
    if (targetId) {
      scrollToSection(targetId);
      if (history.pushState) {
        history.pushState(null, "", `#${targetId}`);
      } else {
        location.hash = targetId;
      }
    }
  });
});

const updateActiveNavOnScroll = function () {
  if (isClickScrolling) return;

  // If scrolled close to the bottom of the page, activate the last section
  const isAtBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 60);

  if (isAtBottom && sections.length > 0) {
    const lastSectionId = sections[sections.length - 1].getAttribute("id");
    setActiveNavLink(lastSectionId);
    return;
  }

  const isDesktop = window.innerWidth >= 1024;
  const triggerOffset = isDesktop ? 160 : 120;
  let currentSectionId = sections[0] ? sections[0].getAttribute("id") : "about";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= triggerOffset) {
      currentSectionId = section.getAttribute("id");
    }
  });

  setActiveNavLink(currentSectionId);
};

let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveNavOnScroll();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

window.addEventListener("load", function () {
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    setTimeout(() => {
      scrollToSection(hash);
    }, 250);
  } else {
    updateActiveNavOnScroll();
  }
});

window.addEventListener("hashchange", function () {
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    scrollToSection(hash);
  }
});



/**
 * ============================================
 * PROJECT DETAIL MODAL
 * ============================================
 */
const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const modalGithub = document.getElementById("modalGithub");
const modalLive = document.getElementById("modalLive");

const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.target.closest(".project-link-icon") || e.target.closest(".project-overlay-btn")) return;

    const title = item.querySelector(".project-title").textContent;
    const category = item.querySelector(".project-category").textContent;
    const imgSrc = item.querySelector(".project-img img").src;
    const imgAlt = item.querySelector(".project-img img").alt;
    const desc = item.dataset.projectDesc || "No description available.";
    const techStr = item.dataset.projectTech || "";
    const githubLink = item.dataset.projectGithub || "#";
    const liveLink = item.dataset.projectLive || "#";

    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalDesc.textContent = desc;

    modalTech.innerHTML = "";
    if (techStr) {
      techStr.split(",").forEach(function (tech) {
        const tag = document.createElement("span");
        tag.className = "project-modal-tech-tag";
        tag.textContent = tech.trim();
        modalTech.appendChild(tag);
      });
    }

    modalGithub.href = githubLink;
    modalLive.href = liveLink;

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", function (e) {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

/**
 * ============================================
 * PROJECT FILTER
 * ============================================
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // Remove active from all filter buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.textContent.trim().toLowerCase();

      filterItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (category === "all" || itemCategory === category) {
          item.classList.remove("exit");
          item.classList.add("active");
        } else {
          item.classList.add("exit");
          setTimeout(() => {
            item.classList.remove("active");
            item.classList.remove("exit");
          }, 300);
        }
      });
    });
  });
}
