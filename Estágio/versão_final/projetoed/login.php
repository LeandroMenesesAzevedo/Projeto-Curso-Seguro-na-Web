<?php 
    session_start();
  //  print_r($_SESSION);
   
    /*if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha'])== true))
    {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header("Location: login.php");
    }
    $logado = $_SESSION['email'];*/
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto de Educação Digital</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="shortcut icon" href="imagens/Logo_semfd.png" type="image/x-icon">
    <link rel="stylesheet" href="estilodosite/logcad.css">
</head>
<body>
    <main>
        <section id="login">
                <div id="imagem">
                      <!-- Aqui vai a imagem nas css-->  
                </div>
                <div id="formulario">
                        <h1>LOGIN</h1>
                        <p>Bem vindo</p>
                    <form action="testLogin.php" method="post" autocomplete="on">
                        
                        <div class="campo">
                            <span class="material-icons">person</span>  
                            <input type="email" name="usuario" id="ilogin" placeholder="Digite seu e-mail" maxlength="30" autocomplete="email" required>
                            <label for="ilogin">Login</label>
                        </div>
                       
                        <div class="campo">
                            <span class="material-icons">vpn_key</span>
                            <input type="password" name="senha" id="isenha" placeholder="Digite sua senha" autocomplete="current-password" required minlength="8" maxlength="20" autocomplete="current-password" required>
                            <label for="isenha"> Senha</label>
                           
                        </div>
                        <input type="submit" name="submit" value="Enviar">
                       <!-- <a href="#" class="botao">Esqueci a senha <i class="material-icons">mail</i></a> --> 
                        
                        <a href="cadastro.php" class="botao">Realizar cadastro</a>
                    </form>
                </div>
        </section>
    </main>
</body>
</html>
