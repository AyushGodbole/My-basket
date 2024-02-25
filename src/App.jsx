import React from 'react';
import '../src/index.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact={true} path='/' element={<Home/>} />
        <Route exact={true} path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
