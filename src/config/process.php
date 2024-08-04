<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $cino = $_POST['cino'];
    $action = $_POST['action'];
    $es_ajax_request = $_POST['es_ajax_request'];

    // Prepare request URL and data
    $url = 'https://tinsukia.dcourts.gov.in/wp-admin/admin-ajax.php';
    $data = array(
        'cino' => $cino,
        'action' => $action,
        'es_ajax_request' => $es_ajax_request
    );

    // Initialize cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

    // Execute request and fetch response
    $response = curl_exec($ch);
    curl_close($ch);

    // Store response in session
    session_start();
    $_SESSION['api_response'] = $response;

    // Redirect to results page
    header('Location: result.php');
    exit();
}
?>
