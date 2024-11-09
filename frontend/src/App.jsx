import './App.css'
import SignUp from './components/SignUp';
import OnlyCourses from './courses/OnlyCourses';
import Home from './home/Home'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<OnlyCourses />}/>
      <Route path='/signup' element={<SignUp />}/>
     </Routes>
    </div>
    </>
  )
}

export default App
