import React, {useState, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';



function App({wordStore}) {
  const [newWord, setNewWord] = useState('');

  useEffect( () => {
    loadData();
}, []);

  const addNewWord = () => {
    if (!newWord) return;
    wordStore.add(newWord);
    setNewWord('');
  };
  const deleteWord = (index) => {
    wordStore.remove(index);
  }

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default inject(["wordStore"])(observer(App));
