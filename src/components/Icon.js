import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Icon ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getCharacter, image}) {

    return (
        <div>
            <button onClick={(e) => {e.preventDefault()
            getCharacter()}}>Click me</button>
            {image.data}
        </div>
    )
}

export default Icon;