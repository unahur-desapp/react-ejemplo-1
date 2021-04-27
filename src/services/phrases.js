const initialPhrases = [
    "Se aprovechan de mi nobleza",
    "Que no panda el cúnico",
    "Y ahora ... ¿quién podrá ayudarme?",
    "No contaban con mi astucia",
];

const additionalPhrases = [
    "Síganme los buenos",
    "Todos mis movimientos están fríamente calculados",
    "Lo sospeché desde un principio",
    "Mis antenitas de vinil detectan la presencia del enemigo"
];

const currentPhrases = [...initialPhrases];

const remainingPhrases = [...additionalPhrases];

export async function getAllPhrases(tvSeries) {
    if (tvSeries === "Dark") {
        return Promise.resolve(["Todos van a morir", "ojo al piojo"]);
    }
    // esto no anda porque React no reacciona, le tengo que cambiar el objeto ...
    // return Promise.resolve(currentPhrases);
    // ... por lo tanto, lo que le devuelvo es siempre un clone nuevo
    return Promise.resolve([...currentPhrases]);
}

export async function addFixedPhrase() {
    if (remainingPhrases.length > 0) {
        const phraseToAppend = remainingPhrases.splice(0, 1)[0];
        currentPhrases.push(phraseToAppend);
    }
}
