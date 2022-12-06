import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Create from './Componets/Create';
import Read from './Componets/Read';
import Update from './Componets/Update';



function App() {
 
  return (
    <div>
     
    <BrowserRouter>
    <Routes>
      {/* <div className="main"> */}
        
        {/* <h2 className="main-header"> */}
          React Crud Operations
          {/* </h2> */}
        {/* <div> */}
          <Route  path='/' element={<Create />} />
        {/* </div> */}
        {/* <div style={{ marginTop: 20 }}> */}
          <Route  path='/Read' element={<Read />} />
        {/* </div> */}

        <Route path='/Update' element={<Update />} />
      {/* </div> */}
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
