import React from 'react';
import Header from './components/header';
import HouseListing from './components/houseListing';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return <>
    <Header/>
    <HouseListing></HouseListing>
    <Footer/>
  </>
}

export default App;
