import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Suggestion from './Suggestion';

function Container ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getInput, getCharacter}) {

    return (
        <div>
            <Dropdown clothingList={clothingList} eyeBrowList={eyeBrowList} eyeList={eyeList} hairColorList={hairColorList} hairList={hairList} mouthList={mouthList} skinColorList={skinColorList} getInput={getInput} getCharacter={getCharacter}/>
            <Icon />
            <Suggestion />
        </div>
    )
}

export default Container;