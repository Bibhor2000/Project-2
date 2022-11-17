import React, {Component, useState, useEffect} from 'react';


function Dropdown ({input, setInput, clothingList, clothColorList, eyeBrowList, eyeList, hairColorList, hairList, mouthList, skinColorList}) {

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

    let clothColors = clothColorList.map(cc => {
        return (
            <option value={cc}>{cc}</option>
        )
    })

    let mouths = mouthList.map(m => {
        return (
            <option value={m}>{m}</option>
        )
    })
    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <label for='clothes'>Clothes</label>
            <select name='clothes' onChange={handleChange}>{clothes}</select>
            <label for='eyebrows'>Eyebrows</label>
            <select name='eyebrows' onChange={handleChange}>{eyebrows}</select>
            <label for='eyes'>Eyes</label>
            <select name='eyes' onChange={handleChange}>{eyes}</select>
            <label for='hairs'>Hairs</label>
            <select name='hairs' onChange={handleChange}>{hairs}</select>
            <label for='hairColors'>HairColors</label>
            <select name='hairColors' onChange={handleChange}>{hairColors}</select>
            <label for='skinColors'>SkinColors</label>
            <select name='skinColors' onChange={handleChange}>{skinColors}</select>
            <label for='clothColors'>ClothColors</label>
            <select name='clothColors' onChange={handleChange}>{clothColors}</select>
            <label for='mouths'>Mouths</label>
            <select name='mouths' onChange={handleChange}>{mouths}</select>
        </div>
    )
}

export default Dropdown;