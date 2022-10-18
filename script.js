 //Inicializo los arrays con mis datos
 var fichAlumno = ["Hugo", "Bermúdez", "Guntín", "47434502-S", "Desarrollo Web Entorno Cliente", "Desarrollo Aplicaciones Web", "Instituto de Fomento Ocupacional"];
 var etiquetas = ["Nombre", " Apellido 1", "Apellido 2", "D.N.I", "Módulo", "Ciclo", "Centro"];

 //Recorrido de los arrays con bucle for. La salida se mostrará en el div correspondiente
 function bucleFor() {
     let salida = "<h5>Bucle FOR: </h5>";
     for (var i=0; i<fichAlumno.length; i++){
         salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>";     
         }
     document.getElementById("bucleFor").innerHTML = salida;
     };

 //Recorrido de los arrays con bucle while. La salida se mostrará en el div correspondiente
 function bucleWhile(){
     let salida = "<h5>Bucle WHILE</h5>";
     let i = 0;
     while (i<fichAlumno.length){
         salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>";
         i++;     
         }
     document.getElementById("bucleWhile").innerHTML = salida;
     };

 //Recorrido de los arrays con bucle DO-WHILE. La salida se mostrará en el div correspondiente
 function bucleDoWhile() {

     let salida = "<h5>Buche DO-WHILE</h5>";
     let i = 0;
     do {salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>"; i++}
     while (i<fichAlumno.length);
     document.getElementById("bucleDoWhile").innerHTML = salida;

 };

  /* En esta parte se generan los mismos bucles, pero empezando por el index 1 y sumando
   * de 2 en dos para mostrar solamente los valores de las posiciones pares de los arrays */
 function parBucleFor() {
     let salida = "<h5>Bucle FOR: </h5>";
     for (var i=0; i<fichAlumno.length; i++){
         // Con este if controlamos que solamente añada las posiciones pares
         if (i%2 == 0){
             salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>";    
             } 
         }
     document.getElementById("bucleFor").innerHTML = salida;
     };


 function parBucleWhile(){
     let salida = "<h5>Bucle WHILE</h5>";
     let i = 0;
     while (i<fichAlumno.length){
         // Con este if controlamos que solamente añada las posiciones pares
         if (i%2 == 0){
             salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>";
             }
         i++;     
         }
     document.getElementById("bucleWhile").innerHTML = salida;
     };

 function parBucleDoWhile() {

     let salida = "<h5>Buche DO-WHILE</h5>";
     let i = 0;
     do {
         // Con este if controlamos que solamente añada las posiciones pares
         if (i%2 == 0){
             salida += "<b>"+etiquetas[i]+"</b>"+ ": " + fichAlumno[i]+"<br>"}
             i++;}
     while (i<fichAlumno.length);
     document.getElementById("bucleDoWhile").innerHTML = salida;

 };

 /* Funcionalidad de los botones */
 //Creo esta funcion para ejecutar los bucles de manera simultánea al clickar el botón con id="datos_alumno"
 function mostrarDatos(){
     bucleFor();
     bucleWhile();
     bucleDoWhile();
 };
 //Esta funcion permite la ejecución de las funciones que muestran los valores pares al clicar el botón con id="datos_pares"
 function mostrarPares(){
     parBucleDoWhile();
     parBucleFor();
     parBucleWhile();
 };
 //Funcion de reseteo de los resultados
 function borrarTodo(){
     document.getElementById("bucleFor").innerHTML = "";
     document.getElementById("bucleWhile").innerHTML = "";
     document.getElementById("bucleDoWhile").innerHTML = "";
 };