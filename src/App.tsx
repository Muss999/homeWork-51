import { useState } from "react";
import Ball from "./Ball/Ball.tsx";
import "./App.css";

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const sortFunc = (a: number, b: number) => {
        return a - b;
    };

    const randomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const changeNumbers = () => {
        const newNumbersArr: number[] = [];

        for (let i = 0; i < 5; i++) {
            let isCopy = false;
            const randomNum = randomNumber(5, 36);
            for (let j = 0; j < newNumbersArr.length; j++) {
                if (randomNum === newNumbersArr[j]) {
                    isCopy = true;
                    break;
                }
            }
            if (isCopy === true) {
                isCopy = false;
                i--;
                continue;
            }
            newNumbersArr.push(randomNum);
        }
        newNumbersArr.sort(sortFunc);
        setNumbers(newNumbersArr);
    };
    return (
        <div className="container">
            <button type="button" onClick={changeNumbers}>
                New numbers
            </button>
            <div className="balls">
                {numbers.map((number, index) => (
                    <Ball key={index} number={number} />
                ))}
            </div>
        </div>
    );
};
export default App;
