//activa la funcion de el acordeon.
var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener('click', function (){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}

//La propiedad maxHeight establece o devuelve la altura máxima de un elemento con posición absoluta o fija.

//Hace referencia al panel y a la anchura que le queremos dar.
//El valor scrollHeight es igual a la altura mínima (donde la altura incluye el relleno , pero no incluye bordes 
//y márgenes) El elemento lo necesita con el fin de adaptarse a todos los contenidos en el punto de vista sin necesidad 
//de utilizar una barra de desplazamiento vertical. Incluye el  elemento relleno pero no su margen.