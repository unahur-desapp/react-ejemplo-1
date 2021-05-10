import "./App.css";
import { Phrases } from "./phrases/phrases"

function App() {
    return (
        <>
            <Titulo text="Esto es un titulazo"/>
            <hr/>
            <Phrases />
        </>
    )
}

function Titulo(props) {
    return <p className="upperParagraph"> { props.text } </p>
}

export default App;