import React, {Component, useState, useEffect} from 'react';
import SVG from 'react-inlinesvg';
import styles from './misc/icon.css'

function Icon ({getCharacter, image}) {

    const mySVG = image.data;
    return (
        <div>
            <button className='create' onClick={(e) => {e.preventDefault()
            getCharacter()}}>Create Character</button>
            <SVG src={mySVG} className='Display' />
        </div>
    )
}

export default Icon;