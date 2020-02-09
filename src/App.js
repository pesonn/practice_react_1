import React from 'react';
import './App.css';

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header title="First React Practice - Nasa API"/>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
