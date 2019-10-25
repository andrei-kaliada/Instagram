import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./components/Header/Header';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
