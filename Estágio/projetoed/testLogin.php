<?php
    session_start();
    //print_r($_REQUEST);
    if(isset($_POST['submit']) && !empty($_POST['usuario']) && !empty($_POST['senha'])){
        //Acessar
        include_once('config.php');
        $email = $_POST['usuario'];
        $senha = $_POST['senha'];

        //print_r('E-mail: ' . $email);
        //print_r('Senha: ' . $senha);

        $sql = "SELECT * FROM usuarios WHERE usuario = '$email' and senha = '$senha'";

        $result = $conexao->query($sql);

        //print_r($sql);
        //print_r($result);

        if (mysqli_num_rows($result) < 1)
        {
            unset($_SESSION['email']);
            unset($_SESSION['senha']);
            header('Location: login.php');
        }
        else{
            $_SESSION['email'] = $email;
            $_SESSION['senha'] = $senha;
            header('Location: home.html');
        }

    }
    else{
        //Não acessar
        header('Location: login.php');
    }

?>