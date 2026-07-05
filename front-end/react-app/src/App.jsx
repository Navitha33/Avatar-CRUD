import React from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Edit from './Component/Edit'
import Create from './Component/Create'
import "./Component/Home1.css"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/edit/:id' element={<Edit></Edit>} ></Route>
        <Route path='/create' element={<Create></Create>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App