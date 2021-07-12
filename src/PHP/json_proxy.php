<!-- <?php

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

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }    
    // header shit.
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');



    $json_data = $contents;
    echo $json_data;
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage();
    exit(1);
}
 -->
