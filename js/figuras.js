// creamos la variables para capturar el elemento por el id
// toggle es para agregar y quitar una clase
function circulo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("circulo")

}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rombo")
}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rectanguloh")
}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rectangulov")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("abajo")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("derecha")
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("diagonal")
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("triangulo")
}
function imagen(){
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("imagen")
}
    // CAPTURAR DATOS FORMULARIO
function capturarDatos(){
    // CAPTURAR LOS VALORES DE CADA UNOS DE LOS CAMPOS DEL FORMULARIO
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    /*CAPTURAMOS A LOS ELEMENTOS A LOS CUALES LES ASIGNAMOS LOS VALORES */
    var mfoto = document.getElementById("mfoto");
    var mnombres = document.getElementById("mnombres");
    var medad = document.getElementById("medad");
    var mfecha = document.getElementById("mfecha");
    var mgenero = document.getElementById("mgenero");
    var memail = document.getElementById("memail");
    var mdescripcion = document.getElementById("mdescripcion");

// ASIGNAMOS LOS VALORES CAPTURADOS A UN CAMPO

    var contAvatar = document.getElementById("contAvatar");
    mnombres.textContent = nombres;
    medad.textContent = edad;
    mfecha.textContent = fecha;
    mgenero.textContent = genero;
    memail.textContent = email;
    mdescripcion.textContent = descripcion;

    if(genero=="Masculino"){
        mfoto.src="img/man.png";
    }
    else if (genero=="Femenino"){
        mfoto.src="img/woman.png";
    } else{
        mfoto.src="img/user.png";
    }   

switch (color) {
    case "rojo":
    var contenedor = document.getElementById("contAvatar");     
    contenedor.classList.add("rojo");
    break;
    case "azul":
    var contenedor = document.getElementById("contAvatar");     
    contenedor.classList.add("azul");
    break;
    case "verde":
    var contenedor = document.getElementById("contAvatar");     
    contenedor.classList.add("verde");
    break;
    case "morado":
    var contenedor = document.getElementById("contAvatar");     
    contenedor.classList.add("morado");
    break;
    case "gris":
    var contenedor = document.getElementById("contAvatar");     
    contenedor.classList.add("gris");
    break;
  }

}
