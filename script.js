//PASO 1: Obtener todos los inputs de mi formulario y sus IDs
document.querySelectorAll("input"); 
//Resultado:
// 0: input#nombre
// 1: input#apellido12
// 2: input#apellido2
// 3: input#edad
// 4: input#telefono
// 5: input#correo
// 6: input.reset
// 7: input.submit

//PASO 2: creamos la función
document.getElementById("contactForm").addEventListener("submit", function(event){
    //Dentro del objeto "event" están todos los datos del formulario enviado
    
        event.preventDefault(); 
        //este evento "para el tiempo"/para el envío del formulario
    
        console.log("has enviado el formulario!!");
    
        console.log(event);

//PASO 3: pasamos a variables la selección de eventos
    const nombre = event.target.nombre.value;
    const apellido1 = event.target.apellido1.value;
    const apellido2 = event.target.apellido2.value;
    const edad = event.target.edad.value;
    const telefono = event.target.telefono.value;
    const correo = event.target.correo.value;
    
//Definimos la variable del mensaje 
let mensaje = "";

//Vamos dando el mensaje a cada input en función de sus condiciones

//Para el nombre
    if(nombre.length < 1 || nombre.length > 30){
        console.log("Nombre debe tener entre 1 y 30 caracteres");
        
    }
// Para el primer apellido
    if(apellido1.length < 3 || apellido1.length > 20){
        console.log("El primer apellido debe tener entre 1 y 30 caracteres");
        
    }
// Para el segundo apellido
    if(apellido2.length < 3 || apellido2.length > 20){
        console.log("El segundo apellido debe tener entre 1 y 30 caracteres");
        
    }
// Para la edad
    if(edad.length == 2 && edad > 18){
        console.log("Debes ser mayor de edad");
        
    }
// Para el número de teléfono
if (telefono.length !== 9) {
    console.log("Ingrese un teléfono válido de 9 digitos");
    
}
// Para la dirección de correo
if (!correo.endsWith(".com") && !correo.endsWith(".es") || !correo.includes("@")) {
    console.log("Error de validación");
}
// if((!email.endsWith(".com") && !email.endsWith(".es")) || !email.includes("@")){
//     console.log("Error de validación"+email);
//     msj += "Error de validación"+email"\n

//Comprobar si hay errores:
if(msj.length != 0){
    alert(msj)//imprime el mensaje final del error
    document.body.innerHTML += msj;
    let paragraph = document.createElement("p");
    let mensaje = document.createTextNode(msj);
    paragraph.style.backgroundColor = "#DD1C1A";
    paragraph.style.fontSize = "8px";
    paragraph.appendChild(mensaje);

    document.getElementById("contact").appendChild(paragraph); //Esto pinta el resultado
    }
})
