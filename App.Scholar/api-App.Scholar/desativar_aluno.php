<?php
require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);
$id = $dados["id"] ?? $dados["id_alunos"] ?? null;

if (!$id) {
    echo json_encode(["sucesso" => false, "mensagem" => "ID não fornecida."]);
    exit();
}

try {
    $sql = "UPDATE alunos SET status = 'I' WHERE id = :id OR id_alunos = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":id", $id);
    $stmt->execute();

    echo json_encode(["sucesso" => true, "mensagem" => "Aluno desativado com sucesso."]);
} catch (PDOException $e) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro ao desativar: " . $e->getMessage()]);
}
?>