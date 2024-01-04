import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Five from './Five';
import Link1 from './Link1';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Dropdown } from 'bootstrap';


class App extends Component {
  render() {
    return (
      <div>
      
    
    <BrowserRouter>
          
         
            <Routes>
                 <Route path='/'element={<Five/>}/>
                 <Route path='link1'element={<Link1/>}/>
            </Routes>


    </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
