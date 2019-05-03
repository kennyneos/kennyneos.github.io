<?php
require 'db_config.php';
$sql = "SELECT username ,SUM(given*days) AS aggregate FROM `oil_form` WHERE approved_status = 'Yes' GROUP BY username ";

$result = $mysqli->query($sql);
//while($row = $result->fetch_assoc()){
//$data[] = $row;
//
//}
//echo json_encode($data);
$row = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);
?>