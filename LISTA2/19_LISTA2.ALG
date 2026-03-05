Algoritmo "num_diviseis"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
  i, num, divtres, divfive, divambos : inteiro

inicio
   divtres <- 0
   divfive <- 0
   divambos <- 0

   para i de 1 ate 25 faca
      escreva("digite o ", i, "º número: ")
      leia(num)

      se (num % 3 = 0) e (num % 5 = 0) entao
         divambos <- divambos + 1
      fimse

      se num % 3 = 0 entao
         divtres <- divtres + 1
      fimse

      se num % 5 = 0 entao
         divfive <- divfive + 1
      fimse
   fimpara

   escreva("Divisíveis por 3: ", divtres)
   escreva("Divisíveis por 5: ", divfive)
   escreva("Divisíveis por ambos (3 e 5): ", divambos)
fimalgoritmo