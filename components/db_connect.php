<?php
	$path = $_SERVER["HTTP_HOST"];
	if ($path === 'localhost') {
		$host_name = "localhost";
		$user_name = "root";
		$password = "0Okm9Ijn";
		$database = "evan_for_web_cms";
	} else {
		$host_name = "db687560703.db.1and1.com";
		$user_name = "dbo687560703";
		$password = "0Okm9Ijn";
		$database = "db687560703";
	}
	$con = mysqli_connect($host_name, $user_name, $password, $database);
?>