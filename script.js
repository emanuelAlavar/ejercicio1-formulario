// Obtén una referencia al campo select y al párrafo de contenido
const select = document.getElementById('estado');
const contenidoSeleccionado = document.getElementById('estadoadd');

// Agrega un escuchador de eventos al campo select
select.addEventListener('change', function() {
  
  const opcionSeleccionada = select.value;// Obtiene el valor de la opción seleccionada
  contenidoSeleccionado.textContent = `${opcionSeleccionada}`;// Actualiza el contenido del párrafo con el valor seleccionado
});