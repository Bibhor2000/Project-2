import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function QuickDocs ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getInput, getCharacter}) {

    return (
        <div>
            <div className='Tips'> 
                <h2>Before you begin:</h2>
                <p>Make sure you select every option before creating a character</p>
                <p>If you want to use the default values, just select another option and re-select it</p>
            </div>
            <div className='Site'>
                <Link href='https://avatars.dicebear.com/styles/pixel-art'>DiceBear Avatars</Link>
            </div>
            <div className='Reference'>
            </div>
        </div>
    )
}

export default QuickDocs;