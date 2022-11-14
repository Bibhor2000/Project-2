import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Dropdown ({character, setCharacter, info, setInfo, input, setInput, clothingList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList, getInfo, getInput, getCharacter}) {

    let clothes = clothingList.map(c => {
        return (
            <option value={c}>{c}</option>
        ) 
    })

    let eyebrows = eyeBrowList.map(eyb => {
        return (
            <option value={eyb}>{eyb}</option>
        )
    })

    let eyes = eyeList.map(ey => {
        return (
            <option value={ey}>{ey}</option>
        )
    })

    let hairs = hairList.map(h => {
        return (
            <option value={h}>{h}</option>
        )
    })

    let hairColors = hairColorList.map(hc => {
        return (
            <option value={hc}>{hc}</option>
        )
    })

    let skinColors = skinColorList.map(s => {
        return (
            <option value={s}>{s}</option>
        )
    })

    let mouths = mouthList.map(m => {
        return (
            <option value={m}>{m}</option>
        )
    })

    return (
        <div>
            <select>{clothes}</select>
            <select>{eyebrows}</select>
            <select>{eyes}</select>
            <select>{hairs}</select>
            <select>{hairColors}</select>
            <select>{skinColors}</select>
            <select>{mouths}</select>
        </div>
    )
}

export default Dropdown;