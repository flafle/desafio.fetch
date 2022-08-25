import { mostrarAlerta } from "./script.js";
const url='https://pokeapi.co/api/v2/pokemon/';

//asincronismo
export const obtenerPokemon=async pokemon=>{
    try {
        const respuesta = await fetch(`${url}${pokemon}`);
        if (!respuesta.ok) {
            mostrarAlerta("No registrado" );
            return
        }
        const buscado=await respuesta.json();
        return buscado
    } catch (error) {
        mostrarAlerta(error)
    }

}