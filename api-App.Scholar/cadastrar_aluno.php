<?php

require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_content("php://input"), true);
$nome = $dados["nome"];

$sql = "INSERT INTO alunos (nome, status) VALUES (:mome, 'A')";
$stmt = $pdo->prepare($sql);
$stmt->blindValue(":nome", $nome);
$stmt->execute();

echo json_encode(["sucesso" => true, "mensagem" => "Aluno cadastrado com sucesso!"]);

?>