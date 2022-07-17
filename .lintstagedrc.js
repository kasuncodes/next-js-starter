module.exports = {
  "src/**/*.{js,jsx}": ["eslint --cache --fix"],
  "src/**/*.{ts,tsx}": [
    () => "tsc --skipLibCheck --noEmit",
    "eslint --cache --fix",
  ],
};
