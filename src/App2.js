import "./App.css";
import { Phrases } from "./phrases/phrases"

function App() {
    return (
        <div>
            <Titulo/>
            <hr/>
            <Phrases />
        </div>
    )
}

function Titulo() {
    return <p className="upperParagraph"> Esto es un título </p>
}

export default App;