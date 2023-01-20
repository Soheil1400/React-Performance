import React, {useState} from "react";
import Expensive from "../component/colorChallenge/Expensive";
import InputChallenge from "../component/colorChallenge/InputChallenge";
import ResetBtn from "../component/colorChallenge/ResetBtn";
import generateColor from "../feature/colorChallenge/generateColor";
import ColorDisplay from "../component/colorChallenge/ColorDisplay";

const ColorChallenge = (): JSX.Element => {
    const [correctAnswer, setCorrectAnswer] = useState(()=> generateColor())
    const [colorGuess, setColorGuess] = useState<string>('')
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>
                <ColorDisplay correctAnswer={correctAnswer}/>
                <InputChallenge correctAnswer={correctAnswer} colorGuess={colorGuess} setColorGuess={setColorGuess}/>
                <ResetBtn setCorrectAnswer={setCorrectAnswer}/>
                <Expensive/>
            </div>
        </div>
    )
}

export default ColorChallenge