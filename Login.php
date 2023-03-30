<?php
    $usernames=array("rhea_jay","admin");
    $passwords=array("Rhea@123","Admin@111");
    $i=0;
    $username = $_POST['uname'];  
    $password = $_POST['password'];
    while($i<count($usernames))
    {
        if($username==$usernames[$i])
        {
            include 'Home1.html';
        }
        else
        {  
            include 'login.html';
        } 
    }
?>