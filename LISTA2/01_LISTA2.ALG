Algoritmo "numeros_inteiros"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
i, num, spares, contimpar: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  spares <- 0
   contimpar <- 0
   
   para i de 1 ate 20 faca
      escreva("Digite o ", i, "º número: ")
      leia(num)

      se (num mod 2 = 0) entao
         spares <- spares + num
      senao
         contimpar <- contimpar + 1
      fimse
   fimpara

   escreval("A soma dos números pares é: ", spares)
   escreval("A quantidade de números ímpares é: ", contimpar)

Fimalgoritmo