<?php
require 'db_config.php';

$id = $_POST['id'];
$decision = $_POST['decision'];

//$sql ="UPDATE oil_form set approved_status='$id', WHERE id='$id'";

if($decision == "Yes") {
    
    $sql  = "UPDATE oil_form SET approved_status = '$decision'   WHERE id = '$id'";

}else if($decision == "No") {
    $sql  = "delete FROM oil_form WHERE id = '$id'";
}
    



$result = $mysqli->query($sql);

$myObj = new stdClass();
$myObj->success = $result;
echo json_encode($myObj);
?>