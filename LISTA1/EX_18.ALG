Algoritmo "18. Empréstimo Bancário"
// Disciplina : Lógica de Programação
// Professor : André Olimpio
// Descrição : Aqui você descreve o que o programa fe
// Autor (a) : Nome do (a) aluno(a)
// Data atual : 23/02/2026
Var
// Seção de Declarações das variáveis
salario: real
 parcela: real

Inicio
// Seção de Comandos, procedimento, funções, operadore:
 escreva ("Digite o salario: ")
 leia (salario)

 escreva ("Digite o valor da parcela: ")
 leia (parcela)

 se (parcela <= salario * 0.30) entao
 escreva ("Emprestimo APROVADO.")

 senao
 escreva ("Emprestimo NEGADO.")
 fimse

FimalgoritmO