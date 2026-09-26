<?php
require_once "cors.php";
require_once "conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);

$id = $dados["id"] ?? $dados["id_alunos"] ?? null;
$nome = $dados["nome"] ?? null;
$email = $dados["email"] ?? null;
$curso = $dados["curso"] ?? null;
$turma = $dados["turma"] ?? null;

if (!$id) {
    echo json_encode(["sucesso" => false, "mensagem" => "ID do aluno não informada."]);
    exit();
}

try {
    $sql = "UPDATE alunos SET nome = :nome, email = :email, curso = :curso, turma = :turma WHERE id = :id OR id_alunos = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":nome", $nome);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":curso", $curso);
    $stmt->bindValue(":turma", $turma);
    $stmt->bindValue(":id", $id);
    $stmt->execute();

    echo json_encode(["sucesso" => true, "mensagem" => "Aluno atualizado com sucesso!"]);
} catch (PDOException $e) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro ao atualizar: " . $e->getMessage()]);
}
?>