class NoExplicitAny {
  /**
   * Para impedir que o comportamento ERRADO aconteça cadastre no arquivo .eslintrc.cjs a seguinte "rule"
   * 
   * rules: {
   *  "@typescript-eslint/no-explicit-any": "error" // "emite erro caso o dev type qualquer coisa com any"
   * },
   */

  // ---- comportamento ERRADO ----
  // propriedadeComAny: any;

  // metodoComAny(nome: any) {
  //   console.log(nome);
  // }

  // ---- comportamento CORRETO ----
  // propriedadeSemAny: string = 'Teste';

  // metodoSemAny(nome: string) {
  //   console.log(nome);
  // }


}