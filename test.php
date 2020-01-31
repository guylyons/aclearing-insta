<?php
//The URL that we want to GET.
$url = 'http://localhost:3000/ig';
 
//Use file_get_contents to GET the URL in question.
$contents = file_get_contents($url);
$contents = json_decode($contents);
$contents = json_encode( $contents );

 
//If $contents is not a boolean FALSE value.
if($contents !== false){
    //Print out the contents.
    header('Content-type: application/json');
    echo $contents;
}