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
      <Header title="First React App"/>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
