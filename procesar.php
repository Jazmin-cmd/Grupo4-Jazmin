<?php

header("Content-Type: application/json");

// LEER JSON - RECIBIR EL JSON que vino desde el JS.
$json = file_get_contents("php://input");

// MOSTRAR JSON EN CONSOLA PHP (opcional)
file_put_contents("log.txt", $json);

// CONVERTIR JSON A ARRAY PHP
// Convierte el JSON en un array asociativo en PHP.
$datos = json_decode($json, true);

// RESPUESTA
$respuesta = [
    "estado" => "ok",
    "mensaje" => "PHP recibió correctamente el JSON",
    "datos" => $datos
];

// DEVOLVER JSON
// DEVUELVE LA RESPUESTA EN FORMATO JSON AL JS.
echo json_encode($respuesta, JSON_PRETTY_PRINT);

?>