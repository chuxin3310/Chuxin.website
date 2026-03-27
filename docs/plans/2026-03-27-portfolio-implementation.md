# Dark Tech Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page "Dark Tech" themed portfolio website with HTML/CSS/JS that switches between Home, Blog, and Projects sections using data from a separate JS file.

**Architecture:** A lightweight Single Page Application (SPA) where navigation toggles the visibility of content sections. Content is dynamically rendered from `data.js` to ensure easy updates.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6).

---

### Task 1: Project Scaffolding & Data Structure

**Files:**
- Create: `index.html`
- Create: `data.js`
- Create: `style.css`
- Create: `script.js`

- [ ] **Step 1: Create `data.js` with initial content**
```javascript
const SITE_DATA = {
  profile: {
    name: "Your Name",
    bio: "A passionate developer interested in dark tech aesthetics and clean code."
  },
  interests: ["#Gaming", "#OpenSource", "#Cybersecurity", "#WebDev"],
  blog: [
    {
      date: "2026-03-27",
      title: "My First Post",
      content: "Welcome to my dark tech blog. This is where I share my thoughts."
    }
  ],
  projects: [
    {
      name: "Portfolio-v1",
      tech: ["HTML", "CSS", "JS"],
      description: "This very website you are looking at.",
      github: "https://github.com/yourusername/portfolio"
    }
  ]
};
```

- [ ] **Step 2: Create basic `index.html` structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Dark Tech</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="dark-theme">
    <nav>
        <ul>
            <li><button data-target="home">Home</button></li>
            <li><button data-target="blog">Blog</button></li>
            <li><button data-target="projects">Projects</button></li>
        </ul>
    </nav>
    <main id="content">
        <section id="home" class="view"></section>
        <section id="blog" class="view hidden"></section>
        <section id="projects" class="view hidden"></section>
    </main>
    <script src="data.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit initial scaffolding**
```bash
git add index.html data.js style.css script.js
git commit -m "chore: initial project scaffolding"
```

---

### Task 2: Visual Styling (Dark Tech Theme)

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Define CSS variables and base styles**
```css
:root {
    --bg-color: #0d1117;
    --text-primary: #c9d1d9;
    --accent-color: #00ff41;
    --border-color: #30363d;
    --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-mono);
    margin: 0;
    padding: 20px;
    line-height: 1.6;
}

.hidden { display: none; }

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
}

nav button {
    background: none;
    border: 1px solid transparent;
    color: var(--text-primary);
    cursor: pointer;
    font-family: inherit;
    font-size: 1.1rem;
    padding: 5px 10px;
    transition: all 0.3s ease;
}

nav button:hover {
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
}
```

- [ ] **Step 2: Commit styling**
```bash
git add style.css
git commit -m "feat: add dark tech theme styles"
```

---

### Task 3: SPA Logic & Dynamic Rendering

**Files:**
- Modify: `script.js`

- [ ] **Step 1: Implement view switching logic**
```javascript
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});
```

- [ ] **Step 2: Implement rendering functions**
```javascript
function renderHome() {
    const home = document.getElementById('home');
    home.innerHTML = `
        <h1>> ${SITE_DATA.profile.name}</h1>
        <p>${SITE_DATA.profile.bio}</p>
        <div class="interests">
            ${SITE_DATA.interests.map(i => `<span class="tag">${i}</span>`).join('')}
        </div>
    `;
}

function renderBlog() {
    const blog = document.getElementById('blog');
    blog.innerHTML = '<h1>> Blog</h1>' + SITE_DATA.blog.map(post => `
        <div class="post-item">
            <span class="date">[${post.date}]</span>
            <span class="title">${post.title}</span>
        </div>
    `).join('');
}

function renderProjects() {
    const projects = document.getElementById('projects');
    projects.innerHTML = '<h1>> Projects</h1>' + SITE_DATA.projects.map(p => `
        <div class="project-card">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="tech-stack">${p.tech.map(t => `<code>${t}</code>`).join(' ')}</div>
            <a href="${p.github}" target="_blank">View on GitHub</a>
        </div>
    `).join('');
}

// Initial Render
renderHome();
renderBlog();
renderProjects();
```

- [ ] **Step 3: Commit rendering logic**
```bash
git add script.js
git commit -m "feat: add SPA switching and dynamic rendering"
```

---

### Task 4: Final Polishing & Verification

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add card and tag styles**
```css
.tag {
    color: var(--accent-color);
    margin-right: 10px;
}

.project-card {
    border: 1px solid var(--border-color);
    padding: 15px;
    margin-bottom: 20px;
}

.project-card h3 {
    color: var(--accent-color);
    margin-top: 0;
}

.post-item {
    cursor: pointer;
    margin-bottom: 10px;
}

.post-item:hover .title {
    text-decoration: underline;
    color: var(--accent-color);
}
```

- [ ] **Step 2: Verify locally**
Check if all sections are visible when clicked and data is correctly pulled from `data.js`.

- [ ] **Step 3: Commit final styles**
```bash
git add style.css
git commit -m "feat: final UI polishing"
```
