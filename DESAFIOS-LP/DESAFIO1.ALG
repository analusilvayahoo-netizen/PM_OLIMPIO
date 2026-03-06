Algoritmo "media_aluno"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/03/2026
Var
// Seção de Declarações das variáveis 
 i: inteiro
   nota, soma, media: real
   aprovados, recuperacao, reprovados: inteiro

Inicio
   soma <- 0
   aprovados <- 0
   recuperacao <- 0
   reprovados <- 0

   para i de 1 ate 15 faca
      escreva("digite a nota do ", i, "º aluno: ")
      leia(nota)

      soma <- soma + nota

      se (nota >= 7) entao
         aprovados <- aprovados + 1
      senao
         se (nota >= 5) entao
            recuperacao <- recuperacao + 1
         senao
            reprovados <- reprovados + 1
         fimse
      fimse
   fimpara

   media <- soma / 15

   escreval("média da turma: ", media:2:2)
   escreval("quantidade de aprovados: ", aprovados)
   escreval("quantidade em recuperação: ", recuperacao)
   escreval("quantidade de reprovados: ", reprovados)

Fimalgoritmo