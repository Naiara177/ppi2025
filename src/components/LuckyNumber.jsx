import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
    const [luckyNumber, setLuckyNumber] = useState(0);
    const [history, setHistory] = useState([]); // Armazena os números sorteados

    const generateUniqueNumber = () => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100) + 1; // Sorteia um número entre 1 e 100
            if (history.includes(randomNumber)) {
                alert("Eitaa Número repetido! Sorteando novamente...");
            }
        } while (history.includes(randomNumber)); // Continua sorteando até achar um número único

        setLuckyNumber(randomNumber);
        setHistory([...history, randomNumber]); 
        console.log("Lucky Number is now: " + randomNumber);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.numberDisplay}>
                {luckyNumber === 0 ? "🎲 Contador" : `Contador = ${luckyNumber}`}
            </h1>
            <button className={styles.button} onClick={generateUniqueNumber}>
               Clique 
            </button>

            {/* Exibe o histórico de números sorteados */}
            <div className={styles.history}>
                <h2>Histórico de Números Sorteados:</h2>
                <ul>
                    {history.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
