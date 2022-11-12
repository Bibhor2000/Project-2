import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  const [character, setCharacter] = useState()
  const [info, setInfo] = useState()
  const [input, setInput] = useState()

  return (
    <div>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
