Algoritmo "quantid_vendida"
//  
//  
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
   dia, qtd_vendida, total_vendido, maior_venda, dia_maior : inteiro

inicio
   total_vendido <- 0
   maior_venda <- 0
   dia_maior <- 0

   para dia de 1 ate 30 faca
      escreva("digite a quantidade vendida no dia ", dia, ": ")
      leia(qtd_vendida)

      total_vendido <- total_vendido + qtd_vendida

      se qtd_vendida < 5 entao
         escreva("ALERTA: estoque baixo detectado no dia ", dia, "!")
      fimse

      se qtd_vendida > maior_venda entao
         maior_venda <- qtd_vendida
         dia_maior <- dia
      fimse
   fimpara

   escreva("total vendido no mês: ", total_vendido)
   escreva("a maior venda foi ", maior_venda, " unidades no dia ", dia_maior)

fimalgoritmo