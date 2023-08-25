  /**
   * Para impedir que o comportamento ERRADO aconteça cadastre no arquivo .eslintrc.cjs a seguinte "rule"
   * 
   * rules: {
   *  "no-console": ["error", { allow: ["warn", "error"] }] // emite erro quando existe consoles diferentes de "warn" e "error" exemplo: se vc deixar console.log na aplicação vai disparar erro.
   * },
   */
function teste() {
  // descomente essa linha para ver o erro acontecer
  // console.log('teste');
  console.warn('teste');
  console.error('teste');
}