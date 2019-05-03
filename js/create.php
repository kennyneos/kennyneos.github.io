<?php
require_once('db_config.php');

$given = addslashes($_POST['given']);
$days = addslashes($_POST['days']);
$remarks = addslashes($_POST['remarks']);
$management = addslashes($_POST['approver']);

$sql = "INSERT INTO oil_form (given, days, remarks, approver)
VALUES ('$given', '$days','$remarks',$approver') ";
$result = $mysqli->query($sql);

$myObj = new stdClass();
$myObj->success = $result;
echo json_encode($myObj);
?>