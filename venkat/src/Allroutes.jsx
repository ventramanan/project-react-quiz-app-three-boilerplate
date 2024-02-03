import React from 'react'
import {Routes,Route} from "react-router-dom"
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Result from './Components/Result'

export default function AllRoute() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/Quiz' element={<Quiz/>}></Route>
            <Route path='/Result' element={<Result/>}></Route>
        </Routes>
    </div>
  )
}