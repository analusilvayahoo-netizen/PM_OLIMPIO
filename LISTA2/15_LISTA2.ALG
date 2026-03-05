Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
   n, cont, a, b, c, pares : inteiro

inicio
   escreva("Quantos termos você quer ver? ")
   leia(n)

   a <- 0
   b <- 1
   pares <- 0

   escreva("Sequência: ")

   para cont de 1 ate n faca
      escreva(a, " ")

      se a % 2 = 0 entao
         pares <- pares + 1
      fimse

      c <- a + b
      a <- b
      b <- c
   fimpara

   escreva("")
   escreva("Quantidade de números pares: ", pares)
fimalgoritmo