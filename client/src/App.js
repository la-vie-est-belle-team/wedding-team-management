<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
>>>>>>> a40a8bb61028ff28537228ecaec73a2787b146ee

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
=======
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Nav />
      </BrowserRouter>
>>>>>>> a40a8bb61028ff28537228ecaec73a2787b146ee
    </div>
  );
}

export default App;
