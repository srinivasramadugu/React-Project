import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/scss/common.scss';
// import '../assets/css/bootstrap.min.css';
//import '/assets/css/common.css';
 import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
 import '../src/scss/common.scss';
 import '../src/scss/home.scss';
 import '../src/scss/layout.scss';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Menu from '../src/components/menu';
import Home from '../src/home/home';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <div className="App">
       <Header/>
       <Menu/>
       <Home/>
       <Footer/>
    </div>
  );
}





ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
reportWebVitals();
