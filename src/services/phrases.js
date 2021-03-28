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

export async function getAllPhrases() {
    return Promise.resolve([...currentPhrases]);
}

export async function addFixedPhrase() {
    if (remainingPhrases.length > 0) {
        const phraseToAppend = remainingPhrases.splice(0, 1)[0];
        currentPhrases.push(phraseToAppend);
    }
}
