// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
        tabWidth: 2,
        semi: true,
        printWidth: 80,
      },
    },
  ],
};
