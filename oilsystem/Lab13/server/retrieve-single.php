<?php
/// CONNECT
require_once("db_config.php");
$customer_id = $_POST['customer_id'];

header('Content-Type: application/json');

/// SPECIFY/PLAN
$sql = "SELECT * FROM customer WHERE customer_id = $customer_id";

/// DO IT
$result = $mysqli->query($sql);  /// $mysqli comes from db_config.php, CAN BE ANY NAME

while($row = $result->fetch_assoc()) { // RUNS ONCE BECAUSE THERE IS ONLY 1 RECORD
    $data = $row;  // STORE EACH CUSTOMET INFO IN ARRAY
}

echo json_encode($data); // SEND BACK TO AJAX


?>