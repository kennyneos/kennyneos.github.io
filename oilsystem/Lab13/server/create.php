<?php
/// CONNECT
require_once("db_config.php");

/// PHP CODE GOES HERE
    //$name = $_POST['name'] ; // GET name FROM AJAX DATA  
    //$phone_number = addslashes($_POST['phone_number']) ;


    $name = "haha";
    $phone_number = "123";

    $name = addslashes($name);

/// SPECIFY/PLAN
$whatiwanttodo = "INSERT INTO customer 
(name, phone_number) VALUES ('$name', '$phone_number' )";

/// DO IT
$result = $mysqli->query($whatiwanttodo);  /// $mysqli comes from db_config.php, CAN BE ANY NAME

$myObj = new stdClass();  // CREATE THE OBJECT
$myObj->success = $result; // {success: true}
$myObj->message = "HAHA";   // {success: true, message: "HAHA }

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