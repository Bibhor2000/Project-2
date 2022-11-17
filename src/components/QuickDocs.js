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
            <h3>Quick References:</h3>
            <div className='Reference'>
                <ul className='list-title'>
                    <h4>Eyes Types</h4>
                    <li className='item'>Variant01 = Looking Away</li>
                    <li className='item'>Variant02 = Filled with Guilt</li>
                    <li className='item'>Variant03 = Looking Up</li>
                    <li className='item'>Variant04 = Surprised</li>
                    <li className='item'>Variant05 = Looking Down</li>
                    <li className='item'>Variant06 = Narrowed</li>
                    <li className='item'>Variant07 = Two-Tone</li>
                    <li className='item'>Variant08 = Cross-Eyed</li>
                    <li className='item'>Variant09 = Looking Away Narrowed</li>
                    <li className='item'>Variant10 = Looking Away Worried</li>
                    <li className='item'>Variant11 = Looking Down Cross-Eyed</li>
                    <li className='item'>Variant12 = Looking Down</li>
                    <li className='item'>Variant13 = Looking Away02</li>
                </ul>
                <ul className='list-title'>
                    <h4>Eyebrow Types</h4>
                    <li className='item'>Variant01 = Normal</li>
                    <li className='item'>Variant02 = None</li>
                    <li className='item'>Variant03 = Angry</li>
                    <li className='item'>Variant04 = Raised</li>
                    <li className='item'>Variant05 = Normal02</li>
                    <li className='item'>Variant06 = Arched</li>
                    <li className='item'>Variant07 = Arched02</li>
                    <li className='item'>Variant08 = Normal03</li>
                    <li className='item'>Variant09 = Normal04</li>
                    <li className='item'>Variant10 = None02</li>
                    <li className='item'>Variant11 = Annoyed</li>
                    <li className='item'>Variant12 = Annoyed02</li>
                    <li className='item'>Variant13 = Sad</li>
                </ul>
                <ul className='list-title'>
                    <h4>Hair Colors</h4>
                    <li className='item'>Variant01 = Blonde</li>
                    <li className='item'>Variant02 = Blonde02</li>
                    <li className='item'>Variant03 = Brown</li>
                    <li className='item'>Variant04 = Brown02</li>
                    <li className='item'>Variant05 = DarkBrown</li>
                    <li className='item'>Variant06 = DarkBrown02</li>
                    <li className='item'>Variant07 = Maroon</li>
                    <li className='item'>Variant08 = Maroon02</li>
                    <li className='item'>Variant09 = DarkBrown03</li>
                    <li className='item'>Variant10 = Black</li>
                </ul>
                <ul className='list-title'>
                    <h4>Skin Colors</h4>
                    <li className='item'>Variant01 = Starting point for lighter skin tone</li>
                    <li className='item'>Variant05 = Ending point for medium skin tone</li>
                </ul>
                <ul className='list-title'>
                    <h4>Clothes</h4>
                    <li className='item'>Variant01 = Striped T-Shirt</li>
                    <li className='item'>Variant02 = V-Neck T-Shirt</li>
                    <li className='item'>Variant03 = Tank-Top</li>
                    <li className='item'>Variant03 = Tank-Top</li>
                    <li className='item'>Variant04 = V-Neck02</li>
                    <li className='item'>Variant05 = V-Neck03</li>
                    <li className='item'>Variant06 = Two-Tone T-Shirt</li>
                    <li className='item'>Variant07 = Two-Tone</li>
                    <li className='item'>Variant08 = Collared Two-Tone T-Shirt</li>
                    <li className='item'>Variant09 = Two-Tone</li>
                    <li className='item'>Variant10 = Tank-Top02</li>
                    <li className='item'>Variant11 = Tank-Top03</li>
                    <li className='item'>Variant12 = Tank-Top04</li>
                    <li className='item'>Variant13 = T-Shirt</li>
                    <li className='item'>Variant14 = Turtle-Neck</li>
                    <li className='item'>Variant15 = T-Shirt02</li>
                    <li className='item'>Variant16 = Striped T-Shirt02</li>
                    <li className='item'>Variant17 = Checkered T-Shirt </li>
                    <li className='item'>Variant18 = Checkered T-Shirt02</li>
                    <li className='item'>Variant19 = Suspenders</li>
                    <li className='item'>Variant20 = Buttoned-Shirt w/ Tie</li>
                    <li className='item'>Variant21 = Shoulder-Padded Two-Tone</li>
                    <li className='item'>Variant22 = Suspenders02</li>
                    <li className='item'>Variant23 = Buttoned-Shirt w/ Tie02</li>
                    <li className='item'>Variant24 = Buttoned-Shirt w/ Bow-Tie</li>
                    <li className='item'>Variant25 = T-Shirt03</li>
                </ul>
            </div>
        </div>
    )
}

export default QuickDocs;