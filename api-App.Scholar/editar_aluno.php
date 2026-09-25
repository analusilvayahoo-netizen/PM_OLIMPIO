<?php

require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_content("php://input"), true);
$id = $dados["id"];
$nome = $dados["nome"];

$sql = "UPDATE alunos SET nome = :nome WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->blindValue(":nome", $nome);
$stmt->blindValue(":id", $id);
$stmt->execute();

echo json_encode(["sucesso" => true, "mensagem" => "Aluno atualizado com sucesso!"]);

?>