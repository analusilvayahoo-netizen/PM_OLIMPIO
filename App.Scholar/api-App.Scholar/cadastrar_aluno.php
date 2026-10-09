<?php
require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $dados["nome"] ?? null;
$email = $dados["email"] ?? null;
$curso = $dados["curso"] ?? null;
$turma = $dados["turma"] ?? null;

if (!$nome || !$email) {
    echo json_encode(["sucesso" => false, "mensagem" => "Preencha os campos obrigatórios."]);
    exit();
}

try {
    $sql = "INSERT INTO alunos (nome, email, curso, turma, status) VALUES (:nome, :email, :curso, :turma, 'A')";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":nome", $nome);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":curso", $curso);
    $stmt->bindValue(":turma", $turma);
    $stmt->execute();

    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Aluno cadastrado com sucesso!",
        "id" => $pdo->lastInsertId()
    ]);
} catch (PDOException $e) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro ao cadastrar: " . $e->getMessage()]);
}
?>