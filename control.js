function formValidation() {
    var login = document.getElementById("user").value;
    var clave = document.getElementById("password").value;    
    if ((login == "")) {  
        alert("Completar el campo usuario");
        return false;
    } else if ((clave == "") ) {  
        alert("Completar el campo clave");
        return false;
    } else if (!/\S+@\S+/.test(login)){
        alert("Falta el arroba en el usuario");
        return false;
    } else {
        alert("Los datos son correctos")
        return true;
    }
}
    

