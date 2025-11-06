# 🚀 QUICK SETUP GUIDE

Follow these steps to get your portfolio running:

## Step 1: Install Dependencies
```powershell
npm install
```

## Step 2: Add Your Assets

### Required Files:
1. **Your Portrait Photo**
   - Location: `public/pic.png`
   - Format: PNG or JPG (square, 500x500px min)

2. **Your CV/Resume**
   - Location: `public/Sahan_Viranga_Hettiarachchi_CV.pdf`
   - Format: PDF

3. **Project Cover Images** in `public/covers/`:
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
   
   **Image specs**: 16:9 ratio (1280x720 or 1920x1080)

## Step 3: Update Your Links

Edit `src/config/links.ts`:
- Update Medium handle if you have one
- Verify all other links are correct

## Step 4: Update Project URLs

Edit `src/data/projects.ts`:
- Replace placeholder GitHub repo URLs with actual project links
- Add demo links where available

## Step 5: Run Development Server
```powershell
npm run dev
```

Open http://localhost:5173 in your browser!

## Step 6: Test

- ✅ Check splash animation (shows "Sahan Hettiarachchi" then fades)
- ✅ Verify typewriter effect works
- ✅ Test all category filters (All, Development, ML, Creative, Game Dev)
- ✅ Click "Download CV" button
- ✅ Test contact form (opens email)
- ✅ Click all social icons
- ✅ Test on mobile width (resize browser to 390px)

## Step 7: Build & Deploy

```powershell
# Build for production
npm run build

# Test production build locally
npm run preview
```

Then deploy to Vercel:
1. Push to GitHub
2. Import in Vercel
3. Framework: Vite
4. Build: `npm run build`
5. Output: `dist`

---

## ⚠️ Troubleshooting

**Red errors before npm install?**
- Normal! TypeScript errors will disappear after installing dependencies.

**Images not showing?**
- Make sure they're in the `public/` folder (not `src/`)
- Check filenames match exactly (case-sensitive)

**Hero image shows placeholder text?**
- Add your `pic.png` file to the `public/` folder
- Refresh the browser

---

## 🎨 Customization Tips

1. **Change colors**: Edit `tailwind.config.js`
2. **Add more projects**: Edit `src/data/projects.ts`
3. **Update skills**: Edit `src/data/skills.ts`
4. **Change stats**: Edit `src/components/Stats.tsx`

Good luck! 🚀
