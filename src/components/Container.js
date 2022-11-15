import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Suggestion from './Suggestion';

function Container ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getCharacter, image}) {

    return (
        <div>
            <Dropdown input={input} setInput={setInput} clothingList={clothingList} eyeBrowList={eyeBrowList} eyeList={eyeList} hairColorList={hairColorList} hairList={hairList} mouthList={mouthList} skinColorList={skinColorList} getCharacter={getCharacter}/>
            <Icon input={input} setInput={setInput} clothingList={clothingList} eyeBrowList={eyeBrowList} eyeList={eyeList} hairColorList={hairColorList} hairList={hairList} mouthList={mouthList} skinColorList={skinColorList} getCharacter={getCharacter} image={image}/>
            <Suggestion />
        </div>
    )
}

export default Container;