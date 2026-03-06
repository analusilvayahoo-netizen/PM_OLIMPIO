Algoritmo "estatisticas"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/03/2026
Var
// Seção de Declarações das variáveis 
  num, soma, maior, menor: inteiro
   pares, impares: inteiro
   primeiro: logico

Inicio
   soma <- 0
   pares <- 0
   impares <- 0
   primeiro <- verdadeiro

   escreva("digite um número (negativo para sair): ")
   leia(num)

   enquanto (num >= 0) faca

      soma <- soma + num

      se (primeiro = verdadeiro) entao
         maior <- num
         menor <- num
         primeiro <- falso
      senao
         se (num > maior) entao
            maior <- num
         fimse
         se (num < menor) entao
            menor <- num
         fimse
      fimse

      se (num mod 2 = 0) entao
         pares <- pares + 1
      senao
         impares <- impares + 1
      fimse

      escreva("digite o próximo número (negativo para sair): ")
      leia(num)
   fimenquanto

   se (primeiro = falso) entao
      escreval("soma total: ", soma)
      escreval("maior número: ", maior)
      escreval("menor número: ", menor)
      escreval("quantidade de pares: ", pares)
      escreval("quantidade de ímpares: ", impares)
   senao
      escreval("nenhum número positivo foi digitado.")
   fimse

Fimalgoritmo
