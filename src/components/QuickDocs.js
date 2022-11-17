import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styles from './misc/docs.css'

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
                <ul>
                    <h4>Eyes Types</h4>
                    <li>Variant01 = Looking Away</li>
                    <li>Variant02 = Filled with Guilt</li>
                    <li>Variant03 = Looking Up</li>
                    <li>Variant04 = Surprised</li>
                    <li>Variant05 = Looking Down</li>
                    <li>Variant06 = Narrowed</li>
                    <li>Variant07 = Two-Tone</li>
                    <li>Variant08 = Cross-Eyed</li>
                    <li>Variant09 = Looking Away Narrowed</li>
                    <li>Variant10 = Looking Away Worried</li>
                    <li>Variant11 = Looking Down Cross-Eyed</li>
                    <li>Variant12 = Looking Down</li>
                    <li>Variant13 = Looking Away02</li>
                </ul>
                <ul>
                    <h4>Eyebrow Types</h4>
                    <li>Variant01 = Normal</li>
                    <li>Variant02 = None</li>
                    <li>Variant03 = Angry</li>
                    <li>Variant04 = Raised</li>
                    <li>Variant05 = Normal02</li>
                    <li>Variant06 = Arched</li>
                    <li>Variant07 = Arched02</li>
                    <li>Variant08 = Normal03</li>
                    <li>Variant09 = Normal04</li>
                    <li>Variant10 = None02</li>
                    <li>Variant11 = Annoyed</li>
                    <li>Variant12 = Annoyed02</li>
                    <li>Variant13 = Sad</li>
                </ul>
                <ul>
                    <h4>Hair Colors</h4>
                    <li>Variant01 = Blonde</li>
                    <li>Variant02 = Blonde02</li>
                    <li>Variant03 = Brown</li>
                    <li>Variant04 = Brown02</li>
                    <li>Variant05 = DarkBrown</li>
                    <li>Variant06 = DarkBrown02</li>
                    <li>Variant07 = Maroon</li>
                    <li>Variant08 = Maroon02</li>
                    <li>Variant09 = DarkBrown03</li>
                    <li>Variant10 = Black</li>
                </ul>
                <ul>
                    <h4>Skin Colors</h4>
                    <li>Variant01 = Starting point for lighter skin tone</li>
                    <li>Variant05 = Ending point for medium skin tone</li>
                </ul>
                <ul>
                    <h4>Clothes</h4>
                    <li>Variant01 = Striped T-Shirt</li>
                    <li>Variant02 = V-Neck T-Shirt</li>
                    <li>Variant03 = Tank-Top</li>
                    <li>Variant04 = V-Neck02</li>
                    <li>Variant05 = V-Neck03</li>
                    <li>Variant06 = Two-Tone T-Shirt</li>
                    <li>Variant07 = Two-Tone Long-Sleeves </li>
                    <li>Variant08 = Collared Two-Tone T-Shirt</li>
                    <li>Variant09 = Two-Tone Long-Sleeves02</li>
                    <li>Variant10 = Tank-Top02</li>
                    <li>Variant11 = Tank-Top03</li>
                    <li>Variant12 = Tank-Top04</li>
                    <li>Variant13 = Long-Sleeves</li>
                </ul>
            </div>
        </div>
    )
}

export default QuickDocs;