
let miBoton = document.querySelector('');
let miTitulo = document.querySelector( '');
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Hola, ' + miNombre;
    }
  }
miBoton.onclick = function() {
    estableceNombreUsuario();
}
let Multiplica =document.querySelector ('');
let resultt = document.querySelector ('');
function Multiplicar (num1, num2) {
     let resultado = num1 * num2 
    return alert (resultado) 
}
Multiplica.onclick = function() {
    Multiplicar();
    }

