import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {WordsContextProvider} from './context/wordsContext';


function App() {
  return (
    <WordsContextProvider>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </WordsContextProvider>
    
  );
}

export default App;
