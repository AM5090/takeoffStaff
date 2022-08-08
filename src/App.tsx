import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Contacts/>} />
          <Route path='/auth' element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
