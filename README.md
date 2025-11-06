# Sahan Hettiarachchi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a stunning black/orange theme, smooth animations, and a comprehensive showcase of projects across Development, ML, Creative, and Game Dev categories.

## ✨ Features

- 🎨 **Modern Design**: Black/orange theme with smooth animations
- ⚡ **Splash Screen**: Eye-catching "shine" effect on load
- ⌨️ **Typewriter Effect**: Dynamic role display
- 📱 **Mobile-First**: Fully responsive across all devices
- 🎯 **Project Categories**: Filterable projects (All, Development, ML, Creative, Game Dev)
- 🛠️ **Skills Showcase**: Brand-accurate tech stack icons
- 📧 **Contact Form**: Direct mailto integration
- 🌐 **Social Links**: GitHub, LinkedIn, Behance, Figma

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your portrait photo**:
   - Place your photo as `public/pic.png`
   - Recommended: Square aspect ratio (500x500px minimum)
   - Formats: PNG or JPG

3. **Add your CV**:
   - Place your CV as `public/Sahan_Viranga_Hettiarachchi_CV.pdf`
   - Or update the filename in `src/config/links.ts`

4. **Add project cover images** in `public/covers/`:
   - chemlms.jpg
   - blockchain.jpg
   - esp32.jpg
   - calcify.jpg
   - karate.jpg
   - eigenfaces.jpg
   - paypop.jpg
   - elearn.jpg
   - uracing.jpg
   - ravanax.jpg
   
   **Recommended specs**: 16:9 aspect ratio (1280x720 or 1920x1080)

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Open in browser**:
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
sahan-portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
├── public/
│   ├── pic.png            # ⚠️ ADD YOUR PORTRAIT HERE
│   ├── Sahan_Viranga_Hettiarachchi_CV.pdf  # ⚠️ ADD YOUR CV HERE
│   └── covers/            # ⚠️ ADD PROJECT IMAGES HERE
│       ├── chemlms.jpg
│       ├── blockchain.jpg
│       └── ... (other project covers)
└── src/
    ├── main.tsx           # React entry point
    ├── App.tsx            # Main app component
    ├── index.css          # Global styles
    ├── config/
    │   └── links.ts       # Social links & contact info
    ├── data/
    │   ├── projects.ts    # Project data
    │   └── skills.ts      # Skills data
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Splash.tsx
    │   ├── Hero.tsx
    │   ├── Stats.tsx
    │   ├── ProjectCard.tsx
    │   ├── ContactForm.tsx
    │   └── Section.tsx
    └── sections/
        ├── Projects.tsx
        ├── Skills.tsx
        ├── About.tsx
        └── Education.tsx
```

## ⚙️ Customization

### Update Personal Links

Edit `src/config/links.ts`:

```typescript
export const LINKS = {
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  behance: 'https://behance.net/yourprofile',
  medium: 'https://medium.com/@yourhandle',
  figma: 'your-figma-link',
  cv: '/Your_CV.pdf'
};
```

### Add/Edit Projects

Edit `src/data/projects.ts`:

```typescript
{
  title: 'Your Project Name',
  slug: 'project-slug',
  category: 'Development', // or 'ML', 'Creative', 'Game Dev'
  cover: '/covers/yourproject.jpg',
  tags: ['React', 'TypeScript'],
  repo: 'https://github.com/yourusername/repo',
  demo: 'https://yourproject.com',
  desc: 'Brief project description'
}
```

### Update Skills

Edit `src/data/skills.ts`:

```typescript
{
  name: 'Skill Name',
  icon: 'logos:skill-icon', // Find icons at iconify.design
  level: 'Advanced' // or 'Intermediate', 'Beginner'
}
```

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  bg: '#0b0b0b',      // Background color
  accent: '#E97319',   // Accent/brand color (orange)
  card: '#111111',     // Card background
  muted: '#9CA3AF'     // Muted text
}
```

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

## 📝 Important Notes

### Before Deploying

- ✅ Add your `pic.png` in `public/` folder
- ✅ Add your CV PDF in `public/` folder
- ✅ Add all project cover images in `public/covers/`
- ✅ Update links in `src/config/links.ts`
- ✅ Update project repository URLs in `src/data/projects.ts`
- ✅ Test on mobile widths (390px, 768px, 1024px)

### Placeholder Handling

The Hero section includes intelligent placeholder handling:
- If `pic.png` doesn't exist, it displays a helpful message
- Replace it with your actual photo to see it live

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Iconify React** - Brand icons
- **Lucide React** - UI icons
- **React Hook Form** - Form handling
- **React Simple Typewriter** - Typewriter effect

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🐛 Troubleshooting

### TypeScript/Lint Errors

The errors you see are normal before installing dependencies. Run:
```bash
npm install
```

### Images Not Loading

Ensure all images are in the `public/` folder (not `src/`). Vite serves files from `public/` at the root level.

### Contact Form Not Working

The contact form uses `mailto:` which opens the user's default email client. For a backend solution, consider:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [Resend](https://resend.com)

## 📞 Support

For issues or questions:
- Email: sahanviranga18@gmail.com
- GitHub: [@Sahancoder](https://github.com/Sahancoder)

## 📜 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Sahan Hettiarachchi**
