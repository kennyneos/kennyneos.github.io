<?php
/// CONNECT TO DATABASE
$hostname = "localhost"; /// FOR EXTERNAL HOSTING http://ipaddress/
$username = "root";
$password ="";
$dbname = "lab12";
$mysqli = new mysqli( $hostname , $username , $password , $dbname );

//$mysqli = new mysqli( "localhost" , "root" , "" , "lab12" );
?>