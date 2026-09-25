<?php

header("Acess-control-Allow-Origin: *");
header("Acess-control-Allow-Methods: GET, POST, PUT OPTIONS");
header("Acess-control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8")

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

?>