<?php
session_start();
$response = isset($_SESSION['api_response']) ? $_SESSION['api_response'] : null;
unset($_SESSION['api_response']); // Clear response after use

// Handle data
if ($response) {
    $data = json_decode($response, true);
    if (isset($data['success']) && $data['success']) {
        $htmlContent = $data['data'];

        // Remove <a> tags but keep text
        $dom = new DOMDocument();
        @$dom->loadHTML($htmlContent);
        $xpath = new DOMXPath($dom);

        foreach ($xpath->query('//a') as $a) {
            $textNode = $dom->createTextNode($a->nodeValue);
            $a->parentNode->replaceChild($textNode, $a);
        }

        $htmlContent = $dom->saveHTML();
    } else {
        $htmlContent = '<p>Error: ' . $data['message'] . '</p>';
    }
} else {
    $htmlContent = '<p>No data received.</p>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results Page</title>
    <style>
        /* Basic styling for better readability */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .section-title {
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Case Details</h1>
    <div id="response">
        <?php echo $htmlContent; ?>
    </div>
</body>
</html>
