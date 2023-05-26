import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/signin' element={ <SignIn />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
