<?php
header('Content-Type: application/json');

// Retrieve the POSTed JSON payload
$input = json_decode(file_get_contents('php://input'), true);
$prompt = isset($input['prompt']) ? $input['prompt'] : '';

if (empty($prompt)) {
    echo json_encode(['response' => 'No prompt provided.']);
    exit;
}

// OpenAI API settings
$apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key securely
$url = "https://api.openai.com/v1/chat/completions";

// Prepare data for the Chat Completion API call
$data = [
    "model" => "gpt-3.5-turbo",
    "messages" => [
        ["role" => "system", "content" => "You are a helpful travel assistant specializing in Jaipur tourism."],
        ["role" => "user", "content" => $prompt]
    ],
    "temperature" => 0.7
];

// Set up and execute the cURL request
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);

$response = curl_exec($ch);
if(curl_errno($ch)){
    echo json_encode(['response' => 'Error: ' . curl_error($ch)]);
    exit;
}
curl_close($ch);

$result = json_decode($response, true);

// Extract the AI-generated response text
$aiText = "";
if (isset($result['choices'][0]['message']['content'])) {
    $aiText = trim($result['choices'][0]['message']['content']);
} else {
    $aiText = "Sorry, I couldn't generate a response.";
}

echo json_encode(['response' => $aiText]);
?>
