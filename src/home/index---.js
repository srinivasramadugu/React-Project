import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../src/scss/common.scss';
import '../assets/css/bootstrap.min.css';
import '../assets/css/App.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu;'
import Home from '../home/home';
import reportWebVitals from './reportWebVitals';

function Home() {
  return (
    <div className="Homepage">
       <Header/>
       <Menu/>
       <Home/>
       <Footer/>
    </div>
  );
}

ReactDOM.render(<Homepage/>,document.getElementById('root'));

export default Home;
reportWebVitals();
