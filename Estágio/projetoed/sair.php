<?php
    session_start();
    unset($_SESSION['e-mail']);
    unset($_SESSION['senha']);
    header("Location: login.php");
?>