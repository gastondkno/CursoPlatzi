console.log(miNombre);

 var miNombre = "Gaston";


hey();
function hey(){
    console.log("Hola" + miNombre);
} // resumen 
//Realice un resumen sobre lo que yo entendí de lo que es el hoisting, aunque no sé que tan correcto sea lo que yo aprendi, igual se los dejo esperando les sea de ayuda a entender el concepto de mejor manera:

//El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.
