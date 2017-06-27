<?php
    // Get the DB Connection File.
    require_once "db_connect.php";

    session_start();

    $loggedInUser = $_SESSION['login_user'];

    $query = "SELECT login_id FROM e4w_login
    WHERE login_email = '$login_email' and  login_password = '$login_password'";
?>