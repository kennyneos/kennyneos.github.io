<?php
/// CONNECT
require_once("db_config.php");

    $name = $_POST['name'] ; // GET name FROM AJAX DATA  
    $phone_number = addslashes($_POST['phone_number']) ;
    $customer_id = $_POST['customer_id'] ;


/// SPECIFY/PLAN
$whatiwanttodo = "UPDATE customer SET name= '$name' , phone_number = '$phone_number' WHERE customer_id = $customer_id ";

/// DO IT
$result = $mysqli->query($whatiwanttodo);  /// $mysqli comes from db_config.php, CAN BE ANY NAME

$myObj = new stdClass();  // CREATE THE OBJECT
$myObj->success = $result; // {success: true}

echo json_encode($myObj);








    
//$name = "John";
//$age = 22;
//
//echo "My name is " . $name ;
//echo "<p>";
//echo "My name is $name ";
//echo "<p>";
//echo 'My name is $name ';





?>