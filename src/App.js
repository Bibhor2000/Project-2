import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [character, setCharacter] = useState()
  const [info, setInfo] = useState()
  const [input, setInput] = useState()

  useEffect(() => {
    async function getInfo () {
      const readInfo = await axios.get('https://avatars.dicebear.com/api/pixel-art/avatar.svg?eyes[]=variant01&eyebrows[]=variant01&mouth[]=happy01&hair[]=short01&hairColor[]=variant01&skinColor[]=variant01&clothing[]=variant01')
      setInfo(readInfo.data)
    }
    getInfo()
  }, []);

  console.log(info)

  async function getInput () {

  }

  async function getCharacter () {

  }

  return (
    <div>
      <Header/>
      <Container 
      character={character} setCharacter={setCharacter}
      info={info} setInfo={setInfo}
      input={input} setInput={setInput}
      />
      <Footer/>
    </div>
  );
}

export default App;
