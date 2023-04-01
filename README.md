### SETUP - vite tailwindcss framer-motion react-router-dom
### SHORT - npm create vite@latest
###       - npm install -D tailwindcss postcss autoprefixer
###       - npx tailwindcss init -p
###       - npm i framer-motion react-router-dom
###       - npm run dev

**************** 
$$$ 
npm create vite@latest
--------------------
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
--------------------
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
--------------------
@tailwind base;
@tailwind components;
@tailwind utilities;
--------------------
npm i framer-motion
--------------------
npm i react-router-dom
