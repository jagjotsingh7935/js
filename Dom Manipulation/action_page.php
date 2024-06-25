<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the value of 'fname' input field from the form
    $name = $_POST['fname'];

    // Use $name as needed (e.g., save to database, display on screen)
    echo "Hello, " . $name . "! Your name was submitted successfully.";
}
?>
