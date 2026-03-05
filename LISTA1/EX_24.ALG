Algoritmo "22. Soma de la N"
// Disciplina : Lógica de Programação
// Professor : André Olimpio
// Descrição : Aqui você descreve o que o programa fa
// Autor (a) : Nome do (a) aluno (a)
// Data atual : 23/02/2026
Var
// Seção de Declarações das variáveis
   numero: inteiro
   soma: inteiro
   contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  soma <- 0
   contador <- 0

   escreva("Digite um numero (0 para parar): ")
   leia(numero)

   enquanto numero <> 0 faca
      soma <- soma + numero
      contador <- contador + 1

      escreva("Digite um numero (0 para parar): ")
      leia(numero)
   fimenquanto

   escreva("Quantidade de numeros digitados: ", contador)
   escreva("Soma total: ", soma)


Fimalgoritmo
