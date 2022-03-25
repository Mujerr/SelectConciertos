

   function creardesple(){
    //1.crea un select
    //2.Con un bucle va creando objetos option 
    //3.Dentro del bucle,va metiendo cada option como hijo del select
    //4.Una vez recorridos todos los elementos del array, ose fuera del bucle, 

    var obj_select = document.createElement("select");
    obj_select.id="opciones_conciertos";
    obj_select.addEventListener("change", CambiarConcierto);

    for (i=0 ; i < opciones_conciertos.length; i++ ){
        var obj_opcion = document.createElement("option");
        obj_opcion.innerHTML = opciones_conciertos[i].nombre;
        obj_opcion.value = opciones_conciertos[i].valor;
        obj_select.appendChild(obj_opcion);
    }
    document.getElementById("contenedor_select").appendChild(obj_select);

   }
function CambiarConcierto(){

    //saber que haseleccionado el usuario 
    //mirar el value del select y haciendo un switch case 
    //miro el valor del select y recorro el array viendo si ese valor coincide con algunos de los elementos del select 
    //Ejemplo: Se ha seleccionado a Iron 


var obj_select = document.getElementById("opciones_conciertos");
var indice = obj_select.selectedIndex;

var nombre = opciones_conciertos[indice].nombre;
var precio = opciones_conciertos[indice].precio;
var texto = "El precio del concierto " + nombre + " y cuesta " + precio + "€";
var parrafo = document.getElementById("txt_precio");
if (parrafo == null){
    var obj_parrafo = document.createElement("p");
    obj_parrafo.id="txt_precio";
    obj_parrafo.innerHTML = texto;
    document.getElementById("contenedor_frase").appendChild(obj_parrafo);
}
else{
    parrafo.innerHTML = texto;
}
}