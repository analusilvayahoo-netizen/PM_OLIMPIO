<?php

require_once "cors.php";
require_once "conexao.php";

$sql = "SELECT id, nome, status FROM alunos WHERE status = 'A' ORDER BY nome";
$stmt = $pdo->query($sql);
$alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($alunos);
echo json_encode(["sucesso" => true, "mensagem" => "Consulta realizada com sucesso."]);

?>