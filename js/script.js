// =====================
// UTIL
// =====================
const $ = id => document.getElementById(id);

// =====================
// THEME TOGGLE
// =====================
$("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// =====================
// MOBILE MENU
// =====================
$("menu").onclick = () => {
  $("nav").classList.toggle("active");
};

// =====================
// DATA (ADMIN CONTROLLED)
// =====================
const data = {
  about:
    "I’m Gaurav, a software engineering student focused on building scalable, performance-driven web applications using modern full-stack technologies. I enjoy designing clean UI, robust backend APIs, and systems that scale efficiently and align with real business needs. Through hands-on projects and continuous learning, I’m developing a strong foundation in application architecture, problem-solving, and system design to grow into a product-oriented software engineer.",
journey: [
  "Started my coding journey with HTML, CSS, and JavaScript, building a strong foundation in web development fundamentals",
  "Developed real-world projects including portfolio web apps, UI clones, and admin dashboards to apply concepts practically",
  "Improved frontend architecture skills with responsive layouts, component-based UI, and performance-focused design",
  "Transitioned toward backend development by learning APIs, authentication flows, and database fundamentals",
  "Currently focusing on scalable backend systems, application architecture, and system design principles"
],


  skills: {
    languages: [
      "C/C++",
      "JAVA(PROFFICENT)",
      "PYTHON",
      "C#" 
    ],
    frontend: [
      "HTML5",
      "CSS Grid & Flexbox",
      "Component-Based UI",
      "JAVASCRIPT",
      
    ],
    backend: [
      "Node.js",
      "REST APIs",
      "Authentication Concepts",
      "Server-Side Logic"
    ],
    FRAMEWORK: [
      "React JS",
      "Aspire dotNet",
      "Angular js"
    ],
    databases: [
      "MySQL",
      "MongoDB",
      "Basic Database Design"
    ],
    tools: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Browser DevTools",
      "Figma (Basic)"
    ],
    others: [
      "System Design Basics",
      "MVC Architecture",
      "Problem Solving",
      "Debugging Techniques"
    ]
  },

  projects: [
    {
      title: "AI Resume Optimizer",
      description:
        "AI-powered web application that analyzes resumes, improves ATS score, and suggests role-specific optimizations.",
      tech: ["React", "JavaScript", "AI Logic", "Prompt Engineering","system design"],
      architecture:
        "Client UI → Resume Analyzer → Skill Matching → Optimized Output",
      image:
        "https://dummyimage.com/600x360/11151c/00f5d4&text=AI+Resume+Optimizer+Architecture"
    },
    {
      title: "Portfolio Web App",
      description:
        "Admin-controlled portfolio with dynamic content, theme system, and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      architecture:
        "UI Components → Theme Manager → Content Controller",
      image:
        "https://dummyimage.com/600x360/11151c/00f5d4&text=Portfolio+Architecture"
    },
    {
      title: "WhatsApp Clone UI",
      description:
        "Pixel-perfect WhatsApp UI clone focused on layout systems and responsiveness.",
      tech: ["HTML5", "CSS3", "JavaScript", "WebSockets", "REST APIs", "Real-Time Messaging"],

      architecture:
        "Layout Engine → Chat UI → Message Components",
      image:
        "https://dummyimage.com/600x360/11151c/00f5d4&text=WhatsApp+UI+Structure"
    },
    {
      title: "Admin Dashboard",
      description:
        "Dashboard for managing users, content, and analytics.",
      tech: ["HTML5", "CSS3", "JavaScript", "REST APIs", "CRUD Operations", "Authentication"],

      architecture:
        "Dashboard UI → Data Manager → CRUD Modules",
      image:
        "https://dummyimage.com/600x360/11151c/00f5d4&text=Admin+Dashboard+Architecture"
    }
  ],

  learning: [
    {
      title: "Advanced React",
      focus: [
        "Hooks & Custom Hooks",
        "Component Architecture",
        "Performance Optimization",
        "State Management"
      ],
      icon: "fa-brands fa-react"
    },
    {
      title: "Backend Scaling",
      focus: [
        "API Design",
        "Scalable Architecture",
        "Database Optimization",
        "Caching"
      ],
      icon: "fa-solid fa-server"
    },
    {
      title: "DSA for Interviews",
      focus: [
        "Problem Solving",
        "Time & Space Complexity",
        "Core Data Structures"
      ],
      icon: "fa-solid fa-code"
    },
    // {
    //   title: "Startup Tech Strategy",
    //   focus: [
    //     "MVP Architecture",
    //     "Tech–Business Alignment",
    //     "Scalable Products"
    //   ],
    //   icon: "fa-solid fa-lightbulb"
    // }
  ]
};

// =====================
// RENDER ABOUT
// =====================
$("aboutText").innerText = data.about;

// =====================
// RENDER JOURNEY
// =====================
data.journey.forEach(step => {
  $("journeyData").innerHTML += `<div>${step}</div>`;
});

// =====================
// RENDER SKILLS (CATEGORIES)
// =====================
const skillsBox = $("skillsData");
Object.entries(data.skills).forEach(([category, items]) => {
  skillsBox.innerHTML += `
    <div class="card">
      <h3>${category.toUpperCase()}</h3>
      <ul>
        ${items.map(i => `<li>${i}</li>`).join("")}
      </ul>
    </div>
  `;
});

// =====================
// RENDER PROJECTS
// =====================
const projectBox = $("projectsData");
data.projects.forEach(project => {
  projectBox.innerHTML += `
    <div class="card project-card">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p class="project-desc">${project.description}</p>

        <h4>Tech Stack</h4>
        <div class="tech-tags">
          ${project.tech.map(t => `<span>${t}</span>`).join("")}
        </div>

        <h4>Architecture</h4>
        <p class="architecture">${project.architecture}</p>
      </div>
    </div>
  `;
});

// =====================
// RENDER LEARNING
// =====================
const learningBox = $("learningData");
data.learning.forEach(item => {
  learningBox.innerHTML += `
    <div class="card learning-card">
      <div class="learning-head">
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
      </div>
      <ul class="learning-list">
        ${item.focus.map(p => `<li>${p}</li>`).join("")}
      </ul>
    </div>
  `;
});

// =====================
// SCROLL PROGRESS BAR (SMOOTH PER SECTION)
// =====================
const progressBar = $("motionProgress");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  // Default to first section
  let sectionIndex = 0;
  let sectionStart = 0;
  let sectionHeight = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const top = scrollTop + rect.top;
    if (scrollTop >= top) {
      sectionIndex = index;
      sectionStart = top;
      sectionHeight = section.offsetHeight;
    }
  });

  // Progress inside current section
  let sectionProgress = (scrollTop - sectionStart) / sectionHeight;
  sectionProgress = Math.min(Math.max(sectionProgress, 0), 1);

  // Overall percentage
  const percent = ((sectionIndex + sectionProgress) / sections.length) * 100;
  progressBar.style.width = `${percent}%`;
});



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .reveal-stagger")
  .forEach(el => observer.observe(el));



  const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    await fetch("https://formsubmit.co/ajax/gauravthakur2054@gmail.com", {
      method: "POST",
      body: data,
    });

    form.reset();
    success.classList.add("show");

    setTimeout(() => {
      success.classList.remove("show");
    }, 3000);

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
});
