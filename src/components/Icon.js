import React, {Component, useState, useEffect} from 'react';
import SVG from 'react-inlinesvg';

function Icon ({getCharacter, image}) {

    const mySVG = image.data;
    return (
        <div>
            <button onClick={(e) => {e.preventDefault()
            getCharacter()}}>Click me</button>
            <SVG src={mySVG} />
        </div>
    )
}

export default Icon;