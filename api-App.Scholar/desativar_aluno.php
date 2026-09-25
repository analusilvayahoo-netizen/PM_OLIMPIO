<?php

require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_content("php://input"), true);
$id = $dados["id"];

$sql = "UPDATE alunos SET status = 'I' WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->blindValue(":id", $id);
$stmt->blindValue(":id", $id);
$stmt->execute();

echo json_encode(["sucesso" => true, "mensagem" => "Aluno desativado."]);

?>