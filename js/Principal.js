import Cl_Rumbera from "./Cl_Rumbera.js";
import Cl_Discoteca from "./Cl_Discoteca.js";

let Rumbero1=new Cl_Rumbera("Luis", 134, 23,"M");
let Rumbero2=new Cl_Rumbera("Ana", 154, 22, "F");
let Rumbero3=new Cl_Rumbera("José", 324, 18, "M");
let Rumbero4=new Cl_Rumbera("Carmen", 286, 19, "F");

let Discoteca=new Cl_Discoteca();

Discoteca.procesarRumbero(Rumbero1);
Discoteca.procesarRumbero(Rumbero2);
Discoteca.procesarRumbero(Rumbero3);
Discoteca.procesarRumbero(Rumbero4);

let salida = document.getElementById("salida");
salida.innerHTML= "Resultado"
salida.innerHTML+= "<br> Pago que realiza Luis: " +Rumbero1.calcularPago();
salida.innerHTML+= "<br> Pago que realiza Ana: " +Rumbero2.calcularPago();
salida.innerHTML+= "<br> Pago que realiza José: " +Rumbero3.calcularPago();
salida.innerHTML+= "<br> Pago que realiza Carmen: " +Rumbero4.calcularPago();
salida.innerHTML+= "<br> <br>";
salida.innerHTML+= "<br> Total Ganado: " +Discoteca.devolveracumTotal();
salida.innerHTML+= "<br> Porcentaje de rumberas mayores a 21 años: " + Discoteca.porcRumberaM() + "%";
salida.innerHTML+= "<br> El sexo que más asistió a la discoteca es: " + Discoteca.asisteciaMayor();