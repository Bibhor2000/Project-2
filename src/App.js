import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/Header';
import axios from 'axios';
import clothingList from './data/clothinglist';
import eyeBrowList from './data/eyebrowlist';
import eyeList from './data/eyelist';
import hairColorList from './data/haircolorlist';
import hairList from './data/hairlist';
import mouthList from './data/mouthlist';
import skinColorList from './data/skincolorlist';


function App() {
  const [character, setCharacter] = useState()
  const [info, setInfo] = useState()
  const [input, setInput] = useState({
    // clothes: '',
    // eyebrow: '',
    // eye: '',
    // hair: '',
    // hairColor: '',
    // mouth: '',
    // skinColor: ''
  })
  const [image, setImage] = useState('')
  //console.log(info)
  // const url = 'https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]'
  // const readUrl = url.data

  // async function getInfo () {
  //   const readInfo = await axios.get(`https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]=variant01&eyebrows[]=variant01&mouth[]=happy01&hair[]=short01&hairColor[]=variant01&skinColor[]=variant01&clothing[]=variant01`)
  //   setInfo(readInfo.data)
  // }
  //getInfo()

  // async function getInput () {

  // }

  async function getCharacter () {
    const createCharacter = await axios.get(`https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]=${input.eyes}&eyebrows[]=${input.eyebrows}&mouth[]=${input.mouths}&hair[]=${input.hairs}&hairColor[]=${input.hairColors}&skinColor[]=${input.skinColors}&clothing[]=${input.clothes}`)
    setImage(createCharacter)
  }
  // console.log(image)
  // console.log(`https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]=${input.eyes}&eyebrows[]=${input.eyebrows}&mouth[]=${input.mouths}&hair[]=${input.hairs}&hairColor[]=${input.hairColors}&skinColor[]=${input.skinColors}&clothing[]=${input.clothes}`)

  return (
    <div>
      <Header/>
      <Container 
      character={character} setCharacter={setCharacter}
      info={info} setInfo={setInfo}
      input={input} setInput={setInput}
      clothingList={clothingList}
      eyeBrowList={eyeBrowList}
      eyeList={eyeList}
      hairColorList={hairColorList}
      hairList={hairList}
      mouthList={mouthList}
      skinColorList={skinColorList}
      getCharacter={getCharacter}
      image={image}
      />
      <Footer/>
    </div>
  );
}

export default App;
