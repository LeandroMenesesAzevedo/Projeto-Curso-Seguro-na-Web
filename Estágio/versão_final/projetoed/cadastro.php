<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="estilodosite/logcad.css">
    <link rel="shortcut icon" href="imagens/Logo_semfd.png" type="image/x-icon">
    
    <?php
        if(isset($_POST))
        {
            // print_r('Nome:' . $_POST['nome']);
           // print_r('<br>');
           // print_r('Data: ' . $_POST['data']);
           // print_r('<br>');
           // print_r('Sexo' . $_POST['genero']);
           // print_r('<br>');
            //print_r($_POST['usu']);
           // print_r('<br>');
           // print_r($_POST['senha']);

           include_once('config.php');

           $nome = $_POST['nome'];
           $data = $_POST['data'];
           $sexo = $_POST['genero'];
           $usuario = $_POST['usu'];
           $senha= $_POST['senha'];

           $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,sexo,data_nasc,usuario,senha) VALUES ('$nome','$sexo','$data','$usuario','$senha')");
        }
    ?>
</head>
<body>
    <main>
        <section id="cadastro">
            <h1> Cadastro do Aluno </h1>
            <form action="cadastro.php" method="post">
                <p><label for="inome"> Nome : </label> <input type="text" name="nome" id="inome" required placeholder="Digite seu nome completo"></p>

                <p>Sexo:</p> 
                <p> 
                    <input type="radio" name="genero" id="masculino" value="masculino" required> Marculino
                    <input type="radio" name="genero" id="femenino" value="femenino" required> Femenino 
                </p>

                <p><label for="idata">Data de Nascimento : </label> <input type="date" name="data" id="idata" required></p>

                <p><label for="iusu"> E-mail: <input type="mail" name="usu" id="iusu" required minlength="5" maxlength="35" placeholder="Digite seu e-mail"> </label></p>

                <p><label for="isenha"> Senha : <input type="password" name="senha" id="isenha" required minlength="8" maxlength="15" autocomplete="current-password" placeholder="Digite sua senha"></label></p>

                <p> <input type="submit" value="Enviar" class="botao"></p>
                <p> <a href="sair.php"class="botao">Sair</a></p>
            </form>
        </section>
    </main>
    
</body>
</html>