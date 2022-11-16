import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import audio from './audios/audio.mp3';

function Footer () {
    const bgm = new Audio(audio)
    const start = () => {
        bgm.play()
    }
    const stop = () => {
        bgm.pause()
    }

    return (
        <div>
            <button onClick={start}>Play</button>
            <button onClick={stop}>Pause</button>
        </div>
    )
}

export default Footer;