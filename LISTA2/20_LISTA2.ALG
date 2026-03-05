Algoritmo "emprestimo"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
   saque, resto : inteiro
   n100, n50, n20, n10, n5, n2, n1 : inteiro

inicio
   repita
      escreval("Digite o valor do saque: ")
      leia(saque)
      se saque <= 0 entao
         escreval("Valor inválido! Digite um número positivo.")
      fimse
   ate saque > 0

   resto <- saque

   n100 <- resto \ 100
   resto <- resto % 100

   n50 <- resto \ 50
   resto <- resto % 50

   n20 <- resto \ 20
   resto <- resto % 20

   n10 <- resto \ 10
   resto <- resto % 10

   n5 <- resto \ 5
   resto <- resto % 5

   n2 <- resto \ 2
   resto <- resto % 2

   n1 <- resto

   escreval("Notas de 100: ", n100)
   escreval("Notas de 50: ", n50)
   escreval("Notas de 20: ", n20)
   escreval("Notas de 10: ", n10)
   escreval("Notas de 5: ", n5)
   escreval("Notas de 2: ", n2)
   escreval("Notas de 1: ", n1)
fimalgoritmo