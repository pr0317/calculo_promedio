var estudiantes = document.querySelectorAll(".estudiante"); 
console.log(estudiantes);

for (var i = 0; i < estudiantes.length; i++){
    
    var estudiante = estudiantes[i];

    var tdNota_1 = estudiante.querySelector(".info-nota_1"); //se usa . para llamar a una clase
    var nota_1 = parseFloat(tdNota_1.textContent);

    var tdNota_2 = estudiante.querySelector(".info-nota_2");
    var nota_2 = parseFloat(tdNota_2.textContent);

    var tdNota_3 = estudiante.querySelector(".info-nota_3");
    var nota_3 = parseFloat(tdNota_3.textContent);

    var tdPROMEDIO = estudiante.querySelector(".info-promedio");
    
    //Funcion para calcular promedio
    function promedio(nota_1, nota_2, nota_3){
        var promedio = ((nota_1*0.3)+(nota_2*0.3)+(nota_3*0.4));
        return promedio.toFixed(2); //Retorna un redondeo a 2 decimales
    }

    //Var global para verificar valores
    nota_1Valida = true;
    nota_2Valida = true;
    nota_3Valida = true;

    if(nota_1 < 0 || nota_1 > 5){
        tdPROMEDIOC.textContent = "Nota 1 Incorrecta";
        nota_1Valida = false;        
        estudiante.classList.add("estudiante-incorrecto"); //llama a la clase CSS estudiante-incorrecto
    }

    if(nota_2 < 0 || nota_2 > 5){
        tdPROMEDIOC.textContent = "Nota 2 Incorrecta";
        nota_2Valida = false;        
        estudiante.classList.add("estudiante-incorrecto"); //llama a la clase CSS estudiante-incorrecto
    }

    if(nota_3 < 0 || nota_3 > 5){
        tdPROMEDIOC.textContent = "Nota 3 Incorrecta";
        nota_3Valida = false;        
        estudiante.classList.add("estudiante-incorrecto"); //llama a la clase CSS estudiante-incorrecto
    }

    
    if (nota_1Valida&&nota_2Valida&&nota_3Valida){
        //Reemplaza el contenido de .info-promedio
        tdPROMEDIO.textContent = promedio(nota_1,nota_2,nota_3);
    }
}