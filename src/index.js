import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import Students from './components/Students';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <Router>
     <Students />
   </Router>,
   document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
