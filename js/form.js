//Titulo del contenedor de añadir pacientes
var titulo_formulario = document.querySelector("#titulo-form");
titulo_formulario.classList.add("titulo-formulario");

//Boton que captura adicionar
var button_add = document.querySelector("#adicionar-estudiante");

button_add.addEventListener("click",function(){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var tabla = document.querySelector("#tabla-estudiantes");
    
    var nombre = form.nombre.value; //Captura el valor escrito por el user en cada form.
    var nota_1 = parseFloat(form.nota_1.value);
    var nota_2 = parseFloat(form.nota_2.value);
    var nota_3 = parseFloat(form.nota_3.value);
       
    estudianteTr = document.createElement("tr"); //Etiqueta de linea de tabla
    nombreTd = document.createElement("td"); //Etiqueta de columna
    nota_1Td = document.createElement("td"); 
    nota_2Td = document.createElement("td"); 
    nota_3Td = document.createElement("td"); 
    promedioTd = document.createElement("td");
    
    nombreTd.textContent = nombre; //Asigna el dato escrito por el user para cada etiqueta Td
    nota_2Td.textContent = nota_2;
    nota_1Td.textContent = nota_1;
    nota_3Td.textContent = nota_3;
    promedioTd.textContent = promedio(nota_1,nota_2,nota_3);

    estudianteTr.appendChild(nombreTd);
    estudianteTr.appendChild(nota_2Td);
    estudianteTr.appendChild(nota_1Td);
    estudianteTr.appendChild(nota_3Td);
    estudianteTr.appendChild(promedioTd);

    tabla.appendChild(estudianteTr) //Añade el contenido de estudianteTr a la tabla
    
});