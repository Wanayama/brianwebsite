<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = mysqli_connect($server, $username, $password, $dbname);

    if(!empty($_POST['email']) && !empty($_POST['password'])){
        $email = $_POST['email'];
        $password = $_POST['password'];

        $query  = "insert into annonyweb(email, password) values('$email', '$password')";

        $run = mysqli_query($conn, $query);
        if($run){
            echo "Submitted successfully";
        }
        else{
            echo "Failed to submit";
        }
    }
    else{
        echo "Please enter all required fields.";
    }
?>