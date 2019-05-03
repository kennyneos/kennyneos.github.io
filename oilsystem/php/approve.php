<?php
require 'db_config.php';
$access = addslashes($_POST['access']);
$sql = "SELECT *FROM `oil_form` WHERE approver ='$access' 	AND approved_status =''";
$result = $mysqli->query($sql);
//$decision = addslashes($_POST['approved_status']);

//while($row = $result->fetch_assoc()){
//$data[] = $row;
//
//}
//echo json_encode($data);
$row = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);

//$sql = "INSERT INTO oil_form (approved_status)
//VALUES ('$decision') ";
//$result = $mysqli->query($sql);
?>