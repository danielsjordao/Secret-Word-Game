import { useState, useRef } from 'react';
import './Game.css';

const Game = ({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetters, 
    wrongLetters,
    guesses,
    score, 
}) => {

    const [letter, setLetter] = useState ("");
    const letterinputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterinputRef.current.focus(); 
        //focar no elemento ao fim do Submit, 
        //possibilitando que o jogo continue dinâmico e o 
        //usuário consiga processar jogadas de forma mais rápida, 
        //não tendo que ficar clicando de novo pela perda de foco do input
    }
  return (
    <div className="game">
        <p className="points">
        <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className="tip">
            Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>
        <div className="wordContainer">
            {letters.map((letter, i) =>(
                guessedLetters.includes(letter) ? (
                    <span key={i} className="letter">
                        {letter}
                    </span>
                ) : (
                    <span key={i} className="blankSquare"></span>
                )
            ))}
        </div>
        <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="letter" 
                maxLength="1" 
                required onChange={(e) => setLetter(e.target.value)}
                value={letter}
                ref={letterinputRef} 
                //atributo ref seta a referência. 
                //Seria como tivesse selecionado o elemento no 
                //DOM, como se fosse dado um querySelector.
                />
                <button>Jogar!</button>
            </form>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Game