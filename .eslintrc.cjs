/* eslint-env node */
module.exports = {
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "@typescript-eslint/no-explicit-any": "error", // "emite erro caso o dev type qualquer coisa com any"
    "no-empty-function": "error", // emite erro quando uma função estiver vazia
    "max-lines-per-function": ["error", 30], // emite erro quando uma função passa de X linhas ( a linha q vc passou no parametro )(["error", X] -> ["error", 30])
    "no-console": ["error", { allow: ["warn", "error"] }] // emite erro quando existe consoles diferentes de "warn" e "error" exemplo: se vc deixar console.log na aplicação vai disparar erro.
  },
  root: true,
  
};