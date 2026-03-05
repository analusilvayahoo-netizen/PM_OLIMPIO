Algoritmo "POSITVO_NEGATIVO"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis
   valor_item, total_bruto, total_descontos, valor_final : real

inicio
   total_bruto <- 0
   total_descontos <- 0
   valor_item <- 1

   enquanto valor_item <> 0 faca
      escreva("Digite o valor da compra (ou 0 para sair): ")
      leia(valor_item)

      se valor_item <> 0 entao
         total_bruto <- total_bruto + valor_item

         se valor_item > 100 entao
            total_descontos <- total_descontos + (valor_item * 0.05)
         fimse
      fimse
   fimenquanto

   valor_final <- total_bruto - total_descontos

   escreva("Faturamento Bruto: R$", total_bruto:2:2)
   escreva("Total de Descontos: R$", total_descontos:2:2)
   escreva("Faturamento Líquido: R$", valor_final:2:2)

fimalgoritmo