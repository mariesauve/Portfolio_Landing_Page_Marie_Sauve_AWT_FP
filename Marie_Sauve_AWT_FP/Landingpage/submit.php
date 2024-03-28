<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Now you can process the form data (e.g., send email, store in database, etc.)
    // For demonstration, you can simply echo the data
    echo "Name: $name <br>";
    echo "Email: $email <br>";
    echo "Message: $message <br>";
}
?>

