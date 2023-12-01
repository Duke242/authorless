module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: {
        "custom-properties": true,
        "nesting-rules": true,
      },
    },
    tailwindcss: {},
  },
};
