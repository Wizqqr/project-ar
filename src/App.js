import './App.css';
import Navbar from './pages/Navbar.jsx';
import Main from './components/Main/Main.jsx'
import Sport from './components/Sport/Sport'
import Things from './components/Things/Things'
import {Home} from './components/Home/Home'
import Rest from './components/Rest/Rest'
import {Faq} from './components/FAQ/FAQ'
import {Job} from './components/Job/Job'
import Cart from './components/Sport/Cart/Cart.jsx'
import {About} from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Rest/>}/>
        <Route path='/Sport' element={<Sport/>}/>
        <Route path='/Things' element={<Things/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Rest' element={<Rest/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/Job' element={<Job/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
