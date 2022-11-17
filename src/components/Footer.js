import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import audio from './misc/audio.mp3';

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
            <button onClick={start}>Play Music</button>
            <button onClick={stop}>Pause Music</button>
        </div>
    )
}

export default Footer;