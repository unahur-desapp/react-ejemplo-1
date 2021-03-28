import "./App.css";
import { Phrases } from "./phrases/phrases"

function App() {
    return (
        <div>
            <Titulo title="Esto es un título"/>
            <hr/>
            <Phrases />
        </div>
    )
}

function Titulo(props) {
    return <p className="upperParagraph">{props.title}</p>
}

export default App;