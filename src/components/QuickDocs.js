import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function QuickDocs ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getInput, getCharacter}) {

    return (
        <div>
            <div className='Tips'> 
                <h3>Before you begin:</h3>
                <p>Make sure you select every option before creating a character</p>
                <p>If you want to use the default values, just select another option and re-select it</p>
            </div>
            <div className='Site'>
                <h3>If you want to know more about the used API click on the link below:</h3>
                <a href='https://avatars.dicebear.com/styles/pixel-art'>DiceBear Avatars</a>
            </div>
            <div className='Reference'>
            </div>
        </div>
    )
}

export default QuickDocs;