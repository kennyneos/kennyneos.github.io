<?php
/// CONNECT
require_once("db_config.php");

$stmt = $mysqli->prepare("SELECT * FROM usernames WHERE username=? AND password=?");
$stmt->bind_param("ss", $_POST["username"], $_POST["password"]);
$stmt->execute();


///// SPECIFY/PLAN
//$whatiwanttodo = "SELECT * FROM usernames 
//WHERE username='$u' and password = '$pw' ";

/// DO IT
$result = $stmt->get_result();  /// $mysqli comes from db_config.php, CAN BE ANY NAME

$num = $result->num_rows;
$myObj = new stdClass(); 
if($num == 0) {
    /// LOGIN FAILS
    $myObj->success = false;
}
else {
    /// LOGIN SUCCESS
    $row = $result->fetch_assoc();
    $myObj->success = true;
    $myObj->username = $row['username'];
    $myObj->access = $row['access'];
}

echo json_encode($myObj);

?>