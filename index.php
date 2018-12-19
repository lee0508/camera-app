<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Video Snapper</title>
    <link rel="stylesheet" href="css/style.css">
	<script src="//apis.google.com/js/plusone.js" async="true" gapi_processed="true"></script>
</head>
<body>
    <div class="navbar">
        <h1>Video Snapper</h1>
    </div>
    <div class="top-container">
        <video id="video" width="640" height="480" autoplay>Stream not available....</video>
        <button id="photo-button" class="btn btn-dark">
          Take Photo
        </button>
        <select id="photo-filter" class="select">
            <option value="none">Normal</option>
            <option value="grayscale(100%)">Grayscale</option>
            <option value="sepia(100%)">Sepia</option>
        </select>
        <button id="clear-button" class="btn btn-light">Clear</button>
        <canvas id="canvas" width="640" height="480"></canvas>
    </div>
    <div class="bottom-container">
        <div id="photos"></div>
    </div>

    <script src="js/main.js"></script>
</body>
</html>

