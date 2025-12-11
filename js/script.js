/**
 * Portfolio Website JavaScript
 * Handles navigation, mobile menu, smooth scrolling, and scroll animations
 */

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in-up class to elements that should animate
    const animateElements = document.querySelectorAll(
        '.skill-card, .project-card, .about-content, .contact-content, .stat-item'
    );
    
    animateElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Front-end only - just show success message
    // In a real application, this would send data to a server
    alert(`Thank you for your message, ${formData.name}! 
    
This is a front-end only form. In a production environment, your message would be sent to: ${formData.email}
    
Subject: ${formData.subject}
Message: ${formData.message}`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===================================
// Lazy Loading Images (if needed)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// State Management
// ===================================
const appState = {
    userName: localStorage.getItem('userName') || 'Omar Slik',
    visitCount: parseInt(localStorage.getItem('visitCount') || '0'),
    githubRepos: [],
    githubUsername: '',
    projectsHidden: false
};

// Initialize visit count
appState.visitCount++;
localStorage.setItem('visitCount', appState.visitCount.toString());
document.getElementById('visitCount').textContent = appState.visitCount;

// Initialize user name
if (document.getElementById('userName')) {
    document.getElementById('userName').value = appState.userName;
}

// ===================================
// Profile Management
// ===================================
const saveNameBtn = document.getElementById('saveNameBtn');
const userNameInput = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

if (saveNameBtn && userNameInput) {
    saveNameBtn.addEventListener('click', () => {
        const newName = userNameInput.value.trim();
        if (newName) {
            appState.userName = newName;
            localStorage.setItem('userName', newName);
            alert('Name saved successfully!');
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to log out? (This is a simulation)')) {
            localStorage.removeItem('userName');
            localStorage.removeItem('visitCount');
            appState.userName = 'Omar Slik';
            appState.visitCount = 0;
            userNameInput.value = appState.userName;
            document.getElementById('visitCount').textContent = '0';
            alert('Logged out successfully! (Simulated)');
        }
    });
}

// ===================================
// GitHub Projects Management
// ===================================
const loadReposBtn = document.getElementById('loadReposBtn');
const githubUsernameInput = document.getElementById('githubUsername');
const languageFilter = document.getElementById('languageFilter');
const sortFilter = document.getElementById('sortFilter');
const githubStatus = document.getElementById('githubStatus');
const githubReposGrid = document.getElementById('githubReposGrid');
const hideProjectsBtn = document.getElementById('hideProjectsBtn');

// Load GitHub repositories
async function loadGitHubRepos(username) {
    if (!username) {
        githubStatus.textContent = 'Please enter a GitHub username';
        githubStatus.style.color = 'var(--text-light)';
        return;
    }

    githubStatus.textContent = 'Loading repositories...';
    githubStatus.style.color = 'var(--text-light)';
    loadReposBtn.disabled = true;
    loadReposBtn.textContent = 'Loading...';

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error(`User not found or API error: ${response.status}`);
        }

        const repos = await response.json();
        appState.githubRepos = repos;
        appState.githubUsername = username;
        
        displayRepos(repos);
        
        githubStatus.textContent = `Loaded ${repos.length} repositories`;
        githubStatus.style.color = '#10b981';
        githubStatus.classList.add('loaded');
    } catch (error) {
        githubStatus.textContent = `Error: ${error.message}`;
        githubStatus.style.color = '#ef4444';
        githubReposGrid.innerHTML = '';
    } finally {
        loadReposBtn.disabled = false;
        loadReposBtn.textContent = 'Load repos';
    }
}

// Display repositories
function displayRepos(repos) {
    const language = languageFilter.value;
    const sortBy = sortFilter.value;
    
    // Filter by language
    let filteredRepos = repos;
    if (language !== 'all') {
        filteredRepos = repos.filter(repo => 
            (repo.language || 'Unknown').toLowerCase() === language.toLowerCase()
        );
    }
    
    // Sort repositories
    filteredRepos.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'stars':
                return b.stargazers_count - a.stargazers_count;
            case 'created':
                return new Date(b.created_at) - new Date(a.created_at);
            case 'updated':
            default:
                return new Date(b.updated_at) - new Date(a.updated_at);
        }
    });
    
    // Display repos
    if (filteredRepos.length === 0) {
        githubReposGrid.innerHTML = '<p style="color: var(--text-light); grid-column: 1/-1;">No repositories found.</p>';
        return;
    }
    
    githubReposGrid.innerHTML = filteredRepos.map(repo => `
        <div class="github-repo-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description provided.'}</p>
            <div class="github-repo-meta">
                <span>${repo.language || 'Unknown language'}</span>
                <span>★ ${repo.stargazers_count}</span>
                <span>Updated on ${new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
            <a href="${repo.html_url}" target="_blank" class="github-repo-link">View on GitHub →</a>
        </div>
    `).join('');
}

// Event listeners
if (loadReposBtn && githubUsernameInput) {
    loadReposBtn.addEventListener('click', () => {
        const username = githubUsernameInput.value.trim();
        loadGitHubRepos(username);
    });
    
    githubUsernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loadReposBtn.click();
        }
    });
}

if (languageFilter) {
    languageFilter.addEventListener('change', () => {
        if (appState.githubRepos.length > 0) {
            displayRepos(appState.githubRepos);
        }
    });
}

if (sortFilter) {
    sortFilter.addEventListener('change', () => {
        if (appState.githubRepos.length > 0) {
            displayRepos(appState.githubRepos);
        }
    });
}

if (hideProjectsBtn) {
    hideProjectsBtn.addEventListener('click', () => {
        appState.projectsHidden = !appState.projectsHidden;
        const controls = document.getElementById('githubControls');
        const grid = document.getElementById('githubReposGrid');
        
        if (appState.projectsHidden) {
            controls.style.display = 'none';
            grid.classList.add('hidden');
            hideProjectsBtn.textContent = 'Show projects';
        } else {
            controls.style.display = 'block';
            grid.classList.remove('hidden');
            hideProjectsBtn.textContent = 'Hide projects';
        }
    });
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Welcome to My Portfolio!', 'font-size: 20px; font-weight: bold; color: #fbbf24;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #9ca3af;');
console.log('%cFeatures: Dark UI, GitHub API, State Management', 'font-size: 12px; color: #6b7280;');

