<?php
    Session_start();
    Session_destroy();
    echo "<script type='text/javascript'>window.sessionStorage.setItem('token', '');</script>";
    echo "<script type='text/javascript'>window.location = 'login.php';</script>";
?>