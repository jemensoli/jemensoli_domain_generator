/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arreglo_pronombre = ["Yo", "el", "Nosotros"];
  let arreglo_verbo = ["corro", "alcanzo", "sonrio"];
  let arreglo_adj = ["rapido", "alto", "feliz"];
  let arreglo_sustantivo = ["bondad", "delicadeza", "sensatez"];
  let count = 0;

  //-variables auxiliares se declaran dentro de cada for para capturar el elemento de cada array/
  for (let auxelemento_p of arreglo_pronombre) {
    for (let auxelemento_v of arreglo_verbo) {
      for (let auxelemento_ad of arreglo_adj) {
        for (let auxelemento_s of arreglo_sustantivo) {
          console.log(
            auxelemento_p +
              auxelemento_v +
              auxelemento_ad +
              auxelemento_s +
              ".com"
          );
          count++;
        }
      }
    }
  }
  //-SALIDA: PRONOMBRE+VERBO+ADJ+SUSTANT//  //write your code here
  console.log("La cantidad de dominios generados es: " + count);
};
