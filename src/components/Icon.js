import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Icon ({character, setCharacter, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getCharacter, image}) {

    return (
        <div>
            <button onClick={(e) => {e.preventDefault()
            getCharacter()}}>Click me</button>
            {/* <img src={image.data}/> */}
            {image.data}
        </div>
    )
}

export default Icon;