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
                </ul>
                <ul>
                    <h4>Eyebrow Types</h4>
                    <li>Variant01 = Normal</li>
                    <li>Variant02 = None</li>
                    <li>Variant03 = Angry</li>
                </ul>
                <ul>
                    <h4>Hair Colors</h4>
                    <li>Variant01 = Blonde</li>
                    <li>Variant02 = Brown</li>
                    <li>Variant03 = Brown02</li>
                </ul>
                <ul>
                    <h4>Skin Colors</h4>
                    <li>Variant01 = Starting point for lighter skin tone</li>
                </ul>
                <ul>
                    <h4>Clothes</h4>
                    <li>Variant01 = Striped T-Shirt</li>
                    <li>Variant02 = V-Neck Shirt</li>
                    <li>Variant03 = Tank Top</li>
                </ul>
            </div>
        </div>
    )
}

export default QuickDocs;