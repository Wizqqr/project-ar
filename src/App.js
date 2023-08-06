import './App.css';
import Navbar from './pages/Navbar.jsx';
import Main from './components/Main/Main.jsx'
import Sport from './components/Sport/Sport'
import Things from './components/Things/Things'
import Home from './components/Home/Home'
import Rest from './components/Rest/Rest'
import {Faq} from './components/FAQ/FAQ'
import {Job} from './components/Job/Job'
import Cart from './components/Sport/Cart/Cart.jsx'
import {About} from './components/About/About'
import  Cruises from './components/Cruises/Cruises'
import Sign from './components/SignUp/SignUp'
import Panth from './components/PanthMen/Panth'
import Apper from './components/All/Apper';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<Navbar/>}>    
        <Route index element={<Home></Home>} ></Route>
        <Route path='/Things' element={<Things/>}></Route>
        <Route path='/Rest' element={<Rest/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Job' element={<Job/>}></Route>
       <Route path='/Apper' element={<Apper/>}></Route>
        <Route path='/Sport' element={<Sport></Sport>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Cruises' element={<Cruises/>}></Route>
        <Route path='/Panth' element={<Panth/>}></Route>
        {/* <Route path='/About' element={<About/>}><Route/> */}
        </Route>
        <Route path='/Sign' element={<Sign/>}/>
        {/* <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Sport' element={<Sport></Sport>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Cruises' element={<Cruises/>}></Route>
        <Route path='/Panth' element={<Panth/>}></Route> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App ;

