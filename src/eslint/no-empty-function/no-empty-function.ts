class NoEmptyFunctionExample {

  /**
   * Para impedir que o comportamento ERRADO aconteça cadastre no arquivo .eslintrc.cjs a seguinte "rule"
   * 
   * rules: {
   *  "no-empty-function": "error", // emite erro quando uma função estiver vazia
   * },
   */

  // ---- comportamento ERRADO ----
  // emptyFunction() {

  // }

  // ---- comportamento CORRETO ----
  // noEmptyFunction() {
  //   console.log('essa função não está vazia')
  // }
}