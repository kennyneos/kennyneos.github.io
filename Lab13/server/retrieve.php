<?php
/// CONNECT
require_once("db_config.php");

header('Content-Type: application/json');

/// SPECIFY/PLAN
$sql = "SELECT * FROM customer";

/// DO IT
$result = $mysqli->query($sql);  /// $mysqli comes from db_config.php, CAN BE ANY NAME

while($row = $result->fetch_assoc()) {
    $data[] = $row;  // STORE EACH CUSTOMET INFO IN ARRAY
}
echo json_encode($data); // SEND BACK TO AJAX


?>