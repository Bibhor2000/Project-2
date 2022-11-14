import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Dropdown ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getInfo, getInput, getCharacter}) {

    let clothes = clothingList.map(c => {
        return (
            <option>{c}</option>
        ) 
    })

    let eyebrows = eyeBrowList.map(eyb => {
        return (
            <option>{eyb}</option>
        )
    })

    let eyes = eyeList.map(ey => {
        return (
            <option>{ey}</option>
        )
    })

    let hairs = hairList.map(h => {
        return (
            <option>{h}</option>
        )
    })

    let hairColors = hairColorList.map(hc => {
        return (
            <option>{hc}</option>
        )
    })

    let skinColors = skinColorList.map(s => {
        return (
            <option>{s}</option>
        )
    })

    let mouths = mouthList.map(m => {
        return (
            <option>{m}</option>
        )
    })

    return (
        <div>
            <div>
            
            </div>
            
        </div>
    )
}

export default Dropdown;