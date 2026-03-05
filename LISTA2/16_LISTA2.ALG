Algoritmo "emprestimo"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
   valor_inicial, taxa, valor_final, juros_pagos : real
   parcelas : inteiro

inicio
   escreva("valor do empréstimo: R$ ")
   leia(valor_inicial)
   escreva("taxa de juros mensal (ex: 2 para 2%): ")
   leia(taxa)
   escreva("número de parcelas: ")
   leia(parcelas)

   taxa <- taxa / 100
   valor_final <- valor_inicial * (1 + taxa) ^ parcelas
   juros_pagos <- valor_final - valor_inicial

   escreva("valor final pago: R$ ", valor_final:2:2)
   escreva("total de juros pagos: R$ ", juros_pagos:2:2)
fimalgoritmo