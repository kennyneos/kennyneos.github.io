<?php
require_once('db_config.php');
$username = addslashes($_POST['username']);
$given = addslashes($_POST['given']);
$days = addslashes($_POST['days']);
$remarks = addslashes($_POST['remarks']);
$approver = addslashes($_POST['approver']);
$datefrom = addslashes($_POST['datefrom']);
$dateto = addslashes($_POST['dateto']);

$sql = "INSERT INTO oil_form (username, given, days, remarks, approver, datefrom, dateto)
VALUES ('$username', '$given', '$days', '$remarks', '$approver' , '$datefrom', '$dateto') ";
$result = $mysqli->query($sql);

$myObj = new stdClass();
$myObj->success = $result;
echo json_encode($myObj);
?>