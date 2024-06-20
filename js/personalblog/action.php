<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Process form data (e.g., save to database, send email)
        // For demonstration purposes, we'll just display the data
        echo "<h2>Form Submission Successful</h2>";
        echo "<p>Name: $name</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Message: $message</p>";
    } else {
        echo "<h2>Error: All fields are required!</h2>";
    }
} else {
    echo "<h2>Error: Invalid form submission!</h2>";
}
?>
