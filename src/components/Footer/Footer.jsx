// core
import React, {useEffect, useRef, useState} from "react";

// styles
import style from './Footer.module.css';

export const Footer = () => {

    const [num, setNum] = useState(100);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(decreaseNum, 1000);
        }
        setPause((prev) => !prev);
    };

    return (
        <div className={style.footer}>
            <div>{num}</div>
            <button onClick={handleClick}>
                {pause ? "Run" : "Pause"}
            </button>
        </div>
    )
}
