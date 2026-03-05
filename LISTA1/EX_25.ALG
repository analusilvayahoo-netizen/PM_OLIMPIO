Algoritmo "22. Soma de la N"
// Disciplina : Lógica de Programação
// Professor : André Olimpio
// Descrição : Aqui você descreve o que o programa fa
// Autor (a) : Nome do (a) aluno (a)
// Data atual : 23/02/2026
Var
// Seção de Declarações das variáveis
numero, maior, menor, i: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
      escreva("Digite o 1º número: ")
   leia(numero)

   maior <- numero
   menor <- numero


   para i de 2 ate 10 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se numero > maior entao
         maior <- numero
      fimse

      se numero < menor entao
         menor <- numero
      fimse
   fimpara

   escreval("O maior número digitado foi: ", maior)
   escreval("O menor número digitado foi: ", menor)

Fimalgoritmo
