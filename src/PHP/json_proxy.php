<?php

$server_url = "https://all.culture.ru/api/2.3/events";
$request_url = $server_url . '?' . $_SERVER['QUERY_STRING'];

$options = array(
    CURLOPT_HEADER         => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_TIMEOUT        => 60,
    CURLOPT_CONNECTTIMEOUT => 0,
    CURLOPT_HTTPGET        => 1
);
try {
    if (is_null($_SERVER['QUERY_STRING']))
        throw new Exception('Bad URI');
    $ch = curl_init($request_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $contents = curl_exec($ch);
    $info = curl_getinfo($ch);
    if ($info['http_code'] >= 400) {
        throw new Exception('Bad error code (' . $info['http_code'] . ')');
    }

    // header shit.
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');

    // base64 encode the data
    //$data = base64_encode($contents);

    $json_data = $contents;//'{ "data" : "' . $data . '" }';
    echo $json_data;
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage();
    exit(1);
}
//echo $request_url;

//echo $response[1]; 
