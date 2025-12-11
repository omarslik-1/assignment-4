# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing skills, projects, and professional experience. Built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects, scroll animations, and dynamic interactions
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Front-end contact form (ready for backend integration)
- **Project Showcase**: Beautiful project cards with overlay effects
- **Skills Section**: Organized grid layout for technical skills
- **About Section**: Personal introduction with statistics

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern CSS with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Google Fonts**: Poppins and Inter fonts for typography

## 📁 Project Structure

```
assignment-4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
└── .gitignore
```

## 🏃 How to Run Locally

1. **Clone the repository** (or download the project files)
   ```bash
   git clone <repository-url>
   cd assignment-4
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - If opened directly: `file:///path/to/index.html`
   - If using a server: `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the folder (usually `/root`)
5. Your site will be available at: `https://<username>.github.io/<repository-name>`

### Alternative Deployment Options

- **Netlify**: Drag and drop the project folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Free hosting for static websites
- **Any static hosting service**: Upload the project files

**Live Demo**: [Deploy to GitHub Pages, Netlify, or Vercel and add link here]

### Quick Deployment Steps

1. **GitHub Pages**:
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push origin main
   
   # Enable GitHub Pages in repository settings
   # Repository → Settings → Pages → Source: main branch
   ```

2. **Netlify**:
   - Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for automatic deployments

3. **Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel` in project directory
   - Follow the prompts

## 📱 Responsive Breakpoints

- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Design Features

- Modern color scheme with primary blue and accent orange
- Smooth scroll animations using Intersection Observer API
- Custom CSS animations and transitions
- Professional typography using Google Fonts
- Card-based layouts for projects and skills
- Hover effects and interactive elements

## 📝 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**:
   - Edit the hero section in `index.html` (name, title, description)
   - Update the About section with your information
   - Modify contact information in the Contact section

2. **Add Your Projects**:
   - Replace project placeholders in the Projects section
   - Update project images in `assets/images/`
   - Add your project links and descriptions

3. **Update Skills**:
   - Modify the skills grid in `index.html`
   - Add or remove skill categories as needed

4. **Styling**:
   - Customize colors in `css/styles.css` (CSS variables in `:root`)
   - Adjust spacing, fonts, and layout as desired

## 🤖 AI Tools Used

This project was developed with assistance from AI coding tools:

- **Cursor AI**: Code generation, suggestions, and refactoring
- **ChatGPT**: Problem-solving and code explanations
- **GitHub Copilot**: Code completions and suggestions

For detailed information about AI usage, see [docs/ai-usage-report.md](docs/ai-usage-report.md)

## 📚 Documentation

- [Technical Documentation](docs/technical-documentation.md) - Architecture and implementation details
- [AI Usage Report](docs/ai-usage-report.md) - Comprehensive report on AI tool usage

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Omar Slik**
- Email: s202182410@kfump.edu.sa
- Phone: +966543082507
- Location: Daharan, Saudi Arabia
- GitHub: [@omarslik](https://github.com/omarslik)
- LinkedIn: [Omar Slik](https://linkedin.com/in/omarslik)

## 🙏 Acknowledgments

- Google Fonts for typography
- Modern CSS techniques and best practices
- Open source community for inspiration

---

**Note**: This is a front-end only portfolio. The contact form is for demonstration purposes and requires backend integration for full functionality.
