

#steps to update gh pages

npm run build  # Generates latest files (usually inside `dist/` or `build/`)
git checkout gh-pages
rm -rf *  # Delete all files (except .git)
cp -r build/* .  # Move the new build files (adjust if using "dist/")
git add .
git commit -m "Deploy latest changes to GitHub Pages"
git push origin gh-pages


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
