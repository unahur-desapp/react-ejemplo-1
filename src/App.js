import React from "react";
import "./App.css";
import { Phrases } from "./phrases/phrases"

const App = () => {
    return (
        <>
            <TituloX titulo="Esto es un titulazo cambiado" />
            {/* {React.createElement(TituloX, { titulo: "Esto es un titulazo cambiadox"}, null)} */}
            {/* {TituloX({ titulo: "Esto es un titulazo cambiadoxx" })} */}
            <hr/>
            <Phrases />
        </>
    )
}

const TituloX = (props) => {
    const listaDeStrings = [props.titulo || "no vino titulo", "Pepu", "Toto"]
    const listaDeSpans = listaDeStrings.map(coso => <span key={coso}>{coso + " "}</span>)
    return <p className="upperParagraph"> {listaDeSpans} </p>
    // return <p className="upperParagraph"> {props.titulo} </p>
}

export default App;