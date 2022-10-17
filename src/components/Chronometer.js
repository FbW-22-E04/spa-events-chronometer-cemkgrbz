import "./Chronometer.css"
import { useState, useEffect } from "react"

function Chronometer() {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);  

    useEffect(() => {
        
        let interval;

        if(timerOn) {

           interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)

        } else {

            clearInterval(interval);
        }

        return() => clearInterval(interval)

    }, [timerOn])

    const handleStart = () => {

        setTimerOn(true)
    }

    const handleStop = () => {

        setTimerOn(false)
    }

    const handleReset = () => {
        
        setTimerOn(false)
        setTime(0)
    }

     return ( 
        <div className="container">
            <h1>React Chrono.</h1>
            <div className="chronoContainer">
                <div className="chronoBox" >
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={handleStart}>START</button>
                    <button className="btn" onClick={handleStop}>STOP</button>
                    <button className="btn" onClick={handleReset}>RESET</button>
                </div>
            </div>
        </div>
    );
};

export default Chronometer;