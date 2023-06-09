import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/signin' element={ <SignIn />}></Route>
          <Route path='/signup' element={ <SignUp />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
