<?php
$command = 'sudo ./detection';
$source = '/home/pi/coral/tflite/python/examples/detection/images/detection_results.jpg';
$dest = 'results.jpg';
chdir('/var/www/html/');
echo passthru($command);
copy($source,$dest);
exec('sudo cp /home/pi/coral/tflite/python/examples/detection/images/detection_results.jpg results.jpg');
?>
