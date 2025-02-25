#steps to update gh pages
git checkout main  #make sure in main branch
npm run build  # Generates latest files (usually inside `dist/` or `build/`)
npm run deploy # To deploy new changes from main to gh pages
