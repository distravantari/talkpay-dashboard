<script type="text/javascript">
    function login(email, password) {
        var data = {};
        data["email"] = email;
        data["password"] = password;
        var output;
        var request = new XMLHttpRequest();
        request.open("POST", "https://talklogic.herokuapp.com/api/v1/auth");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        request.onload = request.onerror = function() {
            try {
                data = JSON.parse(request.responseText);
            } catch(e) {
                output = "Error: " + e;
            }
            if (request.status !== 200) {
                output = "Error: got non-200 status code (" + request.status + ")";
                window.location = "login.php";
                alert("Login Failed");
            }else{
                output = data.data;
                window.sessionStorage.setItem("token", output);
                var page = window.sessionStorage.getItem("page");
                window.location = page;
            }
        }
        request.send(JSON.stringify(data));
    }
</script>

<?php
    if(isset($_POST['login_btn'])) {
        $canLogin = Login();
        if($canLogin == false){
            echo "<script type='text/javascript'>window.location = 'login.php';</script>";
        }
    }
    function Login() {
        if(empty($_POST['email']))
        {
            echo "<script type='text/javascript'>alert('Email is empty!');</script>";
            return false;
        }
        if(empty($_POST['pass']))
        {            
            echo "<script type='text/javascript'>alert('Password is empty!');</script>";
            return false;
        }
        $email = $_POST['email'];
        $password = $_POST['pass'];
        if($email != "metric@talkabot.id"){
            echo "<script type='text/javascript'>alert('Email is invalid!');</script>";
            return false;
        }
        
        echo "<script type='text/javascript'>login('$email','$password');</script>";
        return true;
    }
?>

<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../assets/css/loading.css">
    </head>
    <body>
        <div id="page-loading"></div>
        <script src="../assets/js/loading.js"></script>
    </body>
</html>