<?php
$servername = "sql7.freemysqlhosting.net";
$username = "sql7718926";
$password = "2Y78JI4nYU";
$dbname = "sql7718926";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['data'])) {
    $data = $conn->real_escape_string($_POST['data']);
    $sql = "INSERT INTO user_data (data) VALUES ('$data')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>