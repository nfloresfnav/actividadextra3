let jugarDeNuevo = true;

while (jugarDeNuevo) {
    let numeroSecreto = Math.floor(Math.random() * 9) + 1;

   
    let numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 9):"));

   
    while (numeroUsuario < 1 || numeroUsuario > 9 || isNaN(numeroUsuario)) {
        numeroUsuario = parseInt(prompt("Número inválido. Ingresa un número entre 1 y 9:"));
    }

   
    alert("Tu número: " + numeroUsuario + "\nNúmero secreto: " + numeroSecreto);

  
    if (numeroUsuario < numeroSecreto) {
        alert("Tu número es MENOR que el número secreto. Has perdido");
    } else if (numeroUsuario > numeroSecreto) {
        alert("Tu número es MAYOR que el número secreto. Has perdido");
    } else {
        alert("¡Adivinaste el número secreto! Has ganado.");
    }

   
    let respuesta = prompt("¿Quieres volver a jugar? (sí/no)").toLowerCase();
    if (respuesta !== "si" && respuesta !== "sí") {
        jugarDeNuevo = false;
        alert("Nelson Steven Flores Navarro 26002164.");
    }
}
