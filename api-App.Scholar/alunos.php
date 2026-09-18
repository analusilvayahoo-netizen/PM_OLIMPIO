<?php

require_once "conexao.php";

$metodo = $_SERVER["REQUEST_METHOD"];

switch ($metodo) {

    case "GET":

        $busca = isset($_GET["busca"]) ? trim($_GET["busca"]) : "";

        if ($busca != "") {

            $sql = "SELECT * FROM alunos
                    WHERE nome LIKE ?
                    ORDER BY nome ASC";

            $stmt = $conn->prepare($sql);

            $termo = "%" . $busca . "%";

            $stmt->bind_param("s", $termo);

            $stmt->execute();

            $resultado = $stmt->get_result();

        } else {

            $sql = "SELECT * FROM alunos ORDER BY nome ASC";

            $resultado = $conn->query($sql);
        }

        $alunos = [];

        while ($aluno = $resultado->fetch_assoc()) {
            $alunos[] = $aluno;
        }

        echo json_encode([
            "sucesso" => true,
            "alunos" => $alunos
        ]);

        break;


    case "POST":

        $dados = json_decode(file_get_contents("php://input"), true);

        $cpf = $dados["cpf"] ?? "";
        $nome = $dados["nome"] ?? "";
        $dataNascimento = $dados["data_de_nascimento"] ?? null;
        $email = $dados["email"] ?? "";
        $idCurso = $dados["id_curso"] ?? null;

        $sql = "INSERT INTO alunos
                (cpf, nome, data_de_nascimento, email, id_curso)
                VALUES (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param(
            "ssssi",
            $cpf,
            $nome,
            $dataNascimento,
            $email,
            $idCurso
        );

        if ($stmt->execute()) {

            echo json_encode([
                "sucesso" => true,
                "mensagem" => "Aluno cadastrado com sucesso",
                "id_alunos" => $conn->insert_id
            ]);

        } else {

            http_response_code(500);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "Erro ao cadastrar aluno"
            ]);
        }

        break;


    case "PUT":

        $dados = json_decode(file_get_contents("php://input"), true);

        $id = $dados["id_alunos"] ?? null;
        $cpf = $dados["cpf"] ?? "";
        $nome = $dados["nome"] ?? "";
        $dataNascimento = $dados["data_de_nascimento"] ?? null;
        $email = $dados["email"] ?? "";
        $idCurso = $dados["id_curso"] ?? null;

        if (!$id) {

            http_response_code(400);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "ID do aluno não informado"
            ]);

            exit;
        }

        $sql = "UPDATE alunos
                SET cpf = ?,
                    nome = ?,
                    data_de_nascimento = ?,
                    email = ?,
                    id_curso = ?
                WHERE id_alunos = ?";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param(
            "ssssii",
            $cpf,
            $nome,
            $dataNascimento,
            $email,
            $idCurso,
            $id
        );

        if ($stmt->execute()) {

            echo json_encode([
                "sucesso" => true,
                "mensagem" => "Aluno atualizado com sucesso"
            ]);

        } else {

            http_response_code(500);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "Erro ao atualizar aluno"
            ]);
        }

        break;


    default:

        http_response_code(405);

        echo json_encode([
            "sucesso" => false,
            "mensagem" => "Método não permitido"
        ]);
}

$conn->close();
?>