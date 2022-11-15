import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import Icon from './Icon';

function Container ({character, setCharacter, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getCharacter, image}) {

    return (
        <div>
            <Dropdown input={input} setInput={setInput} clothingList={clothingList} eyeBrowList={eyeBrowList} eyeList={eyeList} hairColorList={hairColorList} hairList={hairList} mouthList={mouthList} skinColorList={skinColorList}/>
            <Icon input={input} setInput={setInput} clothingList={clothingList} eyeBrowList={eyeBrowList} eyeList={eyeList} hairColorList={hairColorList} hairList={hairList} mouthList={mouthList} skinColorList={skinColorList} getCharacter={getCharacter} image={image}/>
        </div>
    )
}

export default Container;