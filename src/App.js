import React from 'react';
import './App.css';


import Routes from './route/Routes';
import TopNav from './navigation/TopNav';
import FooterBar from './UI/FooterBar';




function App() {
  return (
    <div>
      <TopNav />
      <Routes />
      <FooterBar />
    </div>
  );
}

export default App;
