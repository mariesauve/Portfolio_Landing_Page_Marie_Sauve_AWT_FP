

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if($_SERVER["REQUEST_METHOD"] == "POST"){
    // retrieve the data from the form 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    //display the submitted data 
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";
}
?>
