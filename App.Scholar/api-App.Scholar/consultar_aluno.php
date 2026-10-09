<?php
require_once "cors.php";
require_once "conexao.php";

try {
    $sql = "SELECT * FROM alunos WHERE status = 'A' ORDER BY nome";
    $stmt = $pdo->query($sql);
    $alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "alunos" => $alunos
    ]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "mensagem" => "Erro ao consultar: " . $e->getMessage()
    ]);
}
?>