import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import SVG from 'react-inlinesvg';

function Icon ({character, setCharacter, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getCharacter, image}) {

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