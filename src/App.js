import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/Header';
import QuickDocs from './components/QuickDocs';
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
  const [input, setInput] = useState()
  const [image, setImage] = useState('')

  async function getCharacter () {
    const createCharacter = await axios.get(`https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]=${input.eyes}&eyebrows[]=${input.eyebrows}&mouth[]=${input.mouths}&hair[]=${input.hairs}&hairColor[]=${input.hairColors}&skinColor[]=${input.skinColors}&clothing[]=${input.clothes}`)
    setImage(createCharacter)
  }

  return (
    <div>
      <Header/>
      <Container 
      character={character} setCharacter={setCharacter}
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
