import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
