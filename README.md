# Sadaf — Portfolio (React + Bootstrap)

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx        ← React entry point
    └── App.jsx         ← Full portfolio app (all components)
```

## Stack
- **React 18** (functional components + hooks)
- **Bootstrap 5** (layout utilities via CDN classes)
- **Vite** (dev server + bundler)
- **Custom CSS-in-JS** (inline styles for dark theme)

## Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

## Add Your Photo
Replace the base64 image in `src/App.jsx` at the top — look for `const PHOTO = "data:image/png;base64,..."`.
To use a file instead:
```jsx
import photo from './assets/Talha.png'
const PHOTO = photo
```
Then put `Talha.png` in `src/assets/`.
