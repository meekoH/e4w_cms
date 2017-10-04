<?php
    // Get the DB Connection File.
    require_once "db_connect.php";

    // Fetch and Decode the inserted data.
    $data = json_decode(file_get_contents("php://input"));

    $login_email = $_GET['user_email'];
    $login_password = $_GET['user_pw'];

    $query = "SELECT login_id, login_email, login_first_name, login_last_name FROM e4w_login
    WHERE login_email = '$login_email' AND  login_password = '$login_password'";

    // Store the connection details and query itself in the $count variable.
    $result = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($result);

    $json_info = json_encode($row);

    echo $json_info;
?>