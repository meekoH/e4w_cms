<?php
    // Get the DB Connection File.
    require_once "db_connect.php";

    // Fetch and Decode the inserted data.
    $data = json_decode(file_get_contents("php://input"));

    $login_email = mysqli_real_escape_string($con, $data->login_email);
    $login_password = mysqli_real_escape_string($con, $data->login_password);

    $query = "SELECT login_id FROM e4w_login
    WHERE login_email = '$login_email' and  login_password = '$login_password'";

    // Store the connection details and query itself in the $count variable.
    $count = mysqli_query($con, $query);

    // Return the results pulled from the DB. If there are no rows left in the table, stop looping.
    if(mysqli_num_rows($count) == 1) {
        // TO-DO: Find out how to use the session variables in angular.
        // $_SESSION['login_user'] = $login_email;
        echo 'true';
    } else {
        echo 'false';
    }
?>