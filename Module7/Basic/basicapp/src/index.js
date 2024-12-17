import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Basic from './components/Basic';
import Person from './components/Person';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Userinfo from './components/Userinfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const pathName = window.location.pathname;
console.log(pathName)

if(pathName==="/"){
  root.render(
    <React.StrictMode>
      <App />    
    </React.StrictMode>
  );
}
else if(pathName==="/basic"){
  root.render(
    <React.StrictMode>
      <App />
      <Basic />    
    </React.StrictMode>
  );
}
else if(pathName==="/userinfo"){
  root.render(
    <React.StrictMode>
      <App />
      <Userinfo />    
    </React.StrictMode>
  );
}
else if(pathName==="/counter"){
  root.render(
    <React.StrictMode>
      <App />
      <Counter />    
    </React.StrictMode>
  );
}
else if(pathName==="/welcome"){
  root.render(
    <React.StrictMode>
      <App />
      <Welcome />    
    </React.StrictMode>
  );
}
else if(pathName==="/person"){
  root.render(
    <React.StrictMode>
      <App />
      <Person person ={{name:"megha",age:"29",phnno:"900900909"}} />    
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
