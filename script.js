document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

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
