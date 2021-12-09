
function validar_nombreUsuario(String){
    let input = document.getElementById("in_usuario");
    let regxp = /^([a-zA-Z0-9_-]){3,9}$/;
        if(input != regxp){
        return(regxp.test(input.value));
        }
            return false;
    }
    
function validar_contrasena(String){
    let input = document.getElementById("in_contrasena");
    let regxp = /^([a-zA-Z0-9_-]){6,20}$/;
        if(input != regxp){
            return(regxp.test(input.value));
        }
            return false;
    }
    function valCorreo(correo){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido == true){
            alert('el correo es valido');
            
        }else{
            alert('Email incorrecto');
        }
        return (esValido);
    } 
    
    
    
    function error(){
        let  nombre = validar_nombreUsuario();
        let contrasena = validar_contrasena();
        if (nombre == true){
            alert("usuario correcto");
            if(contrasena == true){
                alert("contrasena correcta");
                alert("Usuario registrado");
            }else{
                alert("contrasena errada");
            }
        }else{
            alert("usuario errado");
        }

    }

    function val(){
        
        let contrasena = validar_contrasena();
        if ( valCorreo()== false){
            alert("correo correcto");
            if(contrasena == true){
                alert("contrasena correcta");
                alert("login");
            }else{
                alert("error de ingreso");
            }
        }else{
            alert("Email incorrecto")
        }
    }
    
    const mysql = require(´mysql`)

    const conection = mysql.createConnection({
        host:´localhost`,
        user:´ginazaraza30@gmail.com`,
        password:´`,
        database:´muebleya`
    }]

    conection.connect( (err) =>{
        if(err) throw err
        console.log(´la conexion funciona`)
})    