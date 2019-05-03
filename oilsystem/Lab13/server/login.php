<?php
/// CONNECT
require_once("db_config.php");

$n = $_POST['n']; // GET NAME FROM ajax
$n = $_POST['pw'];

/// SPECIFY/PLAN
$whatiwanttodo = "SELECT * FROM userinfo 
WHERE userid='$n' and password = '$pw' ";

/// DO IT
$result = $mysqli->query($whatiwanttodo);  /// $mysqli comes from db_config.php, CAN BE ANY NAME

$num = $result->num_rows;
myObj = new stdClass(); 
if($num == 0) {
    /// LOGIN FAILS
    myObj->success = false;
}
else {
    /// LOGIN SUCCESS
    $row = $result->fetch_assoc();
    myObj->success = true;
    myObj->name = $row['name'];
    myObj->role = $row['role'];
}
?>