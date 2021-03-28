import { useState, useEffect } from "react";
import "../App.css";
import { addFixedPhrase, getAllPhrases } from "../services/phrases"

export function Phrases() {
    const [phrases, setPhrases] = useState([]);
    const [colorTheme, setColorTheme] = useState("green");

    const specialButtonStyle = {
        borderWidth: 4, borderStyle: "solid", borderRadius: "30px",
        backgroundColor: "beige", borderColor: "peru", color: "saddlebrown",
        marginTop: "50px",
        paddingTop: "10px", paddingBottom: "10px", width: "100%",
        fontSize: "150%", textAlign: "center"
    };

    const blueButtonStyle = { marginBottom: "50px" };

    async function fetchPhrases() {
        const thePhrases = await getAllPhrases();
        setPhrases(thePhrases);
    }

    async function addPhrase() {
        await addFixedPhrase();
        await fetchPhrases();
    }

    useEffect(() => {
        fetchPhrases();
    }, []);

    return (
        <div className="section centered-section">
            <div>{`Estamos en color ${colorTheme}`}</div>
            <PhraseList phrases={phrases} colorTheme={colorTheme} />
            <div className="simple-button" style={blueButtonStyle} onClick={() => setColorTheme("blue")}>
                Cambiar a azul
            </div>
            <PhraseColorSelector setColorTheme={setColorTheme} />
            <div style={specialButtonStyle} onClick={async () => { await addPhrase(); }}>
                Agregar una frase
            </div>
        </div>
    );
}

function PhraseList(props) {
    return <div className="simple-list phrase-list">{
        props.phrases.map((phrase, ix) => 
            <div className={`simple-list-item phrase phrase-in-list phrase-${props.colorTheme}`} key={String(ix)}>
                {phrase}
            </div>
        )
    }</div>;
}

function PhraseColorSelector(props) {
    return <div className="button-row">
        <div className="button-row-label">Color base</div>
        <PhraseColorOption color="red" label="Rojo" setColorTheme={props.setColorTheme}/>
        <PhraseColorOption color="green" label="Verde" setColorTheme={props.setColorTheme}/>
    </div>
}

function PhraseColorOption(props) {
    return <div className="simple-button" onClick={() => props.setColorTheme(props.color)}>{props.label}</div>
}

