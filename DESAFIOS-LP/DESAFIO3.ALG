Algoritmo "controle_temp"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/03/2026
Var
// Seção de Declarações das variáveis 
   temps: vetor [1..12] de real
   i, cont_acima: inteiro
   soma, media, maior, menor: real

Inicio
   soma <- 0
   cont_acima <- 0

   para i de 1 ate 12 faca
      escreva("digite a temperatura do mês ", i, ": ")
      leia(temps[i])

      soma <- soma + temps[i]

      se (i = 1) entao
         maior <- temps[i]
         menor <- temps[i]
      senao

         se (temps[i] > maior) entao
            maior <- temps[i]
         fimse

         se (temps[i] < menor) entao
            menor <- temps[i]
         fimse
      fimse
   fimpara

   media <- soma / 12

   para i de 1 ate 12 faca
      se (temps[i] > media) entao
         cont_acima <- cont_acima + 1
      fimse
   fimpara

   escreval("temperatura média anual: ", media:2:1, "°C")
   escreval("maior Temperatura: ", maior:2:1, "°C")
   escreval("menor Temperatura: ", menor:2:1, "°C")
   escreval("meses acima da média: ", cont_acima)

Fimalgoritmo