# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features a retro, monochrome, brutalist aesthetic with dark mode support.

## 🚀 Features

- **JSON-driven content** - Easy content management via JSON files
- **Dark mode** - Automatic and manual theme switching
- **Responsive design** - Works on all devices
- **Project showcase** - Display your work with screenshots
- **Skills section** - Highlight your technical skills
- **Experience timeline** - Show your professional journey
- **Contact section** - Email and social links

## 🛠️ Tech Stack

- React 18
- Vite
- CSS (Vanilla)
- JSON for content management

## 📁 Project Structure

```
src/
├── assets/
│   ├── profile/      # Logo and avatar SVGs
│   └── projects/     # Project screenshots
├── components/       # React components
├── context/          # Theme context
├── data/             # JSON content files
│   ├── hero.json
│   ├── skills.json
│   ├── experience.json
│   ├── projects.json
│   ├── navigation.json
│   ├── quicklinks.json
│   └── footer.json
└── App.jsx
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

All content is managed through JSON files in `src/data/`:

- **hero.json** - Hero section content
- **skills.json** - Skills and technologies
- **experience.json** - Work and education history
- **projects.json** - Project details and images
- **navigation.json** - Navigation menu items
- **quicklinks.json** - Quick access links
- **footer.json** - Footer content and social links

## 🎨 Customization

1. Replace `src/assets/profile/logo.svg` with your logo
2. Replace `src/assets/profile/avatar.svg` with your avatar
3. Add project screenshots to `src/assets/projects/`
4. Update JSON files in `src/data/` with your content
5. Place your resume PDF in `public/resume.pdf`

## 📦 Deployment

This project is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ by Pruthiviraj
