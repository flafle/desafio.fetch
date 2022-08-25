import {$,mostrarAlerta,mostraInfo} from "./script.js"
import { obtenerPokemon } from "./poke.js";

//validar formulario:
(function(){
    const formulario=$("#formulario");
    formulario.addEventListener('submit', validarForm);

    async function validarForm(e){
        e.preventDefault();
        const pokemon=$("#pokemonInput").value;
        if(pokemon.length==0){
            mostrarAlerta("El campo es Obligatorio");
            return
        }
        const infoPokemon=await obtenerPokemon(pokemon);
        const info=$(".info");
        info.innerHTML="";
        mostraInfo(infoPokemon);
    }

})();