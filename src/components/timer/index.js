"use client"

import React, { useState, useEffect } from "react";

const Timer = (props) => {
    const [timer, setTimer] = useState(0);

    function handleSubmit(event) {
        let val;
        if (event.target.value) {
            val = Math.round(event.target.value);
        } else {
            val = 0;
        }
        setTimer(val);
    }

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTimer(timer - 1);
    }

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    return (
        <div className="wrapper">
            <div id="whole-center">
                <h1>
                    Reverse countdown for
                    <input type="number" id="timeCount" onKeyDown={handleKeypress} /> sec.
                </h1>
            </div>
            <div id="current-time">{timer > 0 ? timer : 0}</div>
        </div>
    );
};

export default Timer;
