<?php
require 'db_config.php';
$username = addslashes($_POST['username']);
$sql = "SELECT *,given*days AS aggregate FROM `oil_form` WHERE username ='$username'";
$result = $mysqli->query($sql);
//while($row = $result->fetch_assoc()){
//$data[] = $row;
//
//}
//echo json_encode($data);
$row = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);
?>