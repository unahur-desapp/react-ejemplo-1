import "./App.css";
import { Phrases } from "./phrases/phrases"

function Titulo(props) {
    const partesFijas = ["Esto es", "un título"];
    const titleCss = "upperParagraph";
    return <p className={titleCss}> {partesFijas.concat([props.endOfTitle]).join(" ")} </p>
}

function App() {
    return (
        <div>
            <Titulo endOfTitle="fantástico"/>
            <hr/>
            <Phrases />
        </div>
    )
}

export default App;