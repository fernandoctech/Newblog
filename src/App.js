import React from 'react';
import Header from './components/header'
import Routes from './routes';
import Footer from './components/footer';


const App = () =>(
  <div className="App">
    <Header/>
    <Routes/>
    <Footer/>
  </div>
);

export default App;
