
import React from 'react'
import './App.css'
import Header from './Components/Common/heading/Header';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CourseHome from './Components/AllCourses/CourseHome';
import Team from './Components/Team/Team';
import Price from './Components/Pricing/Price';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
const App = () => {
  

  return (
    <div>
      <Router>
      <Header/>
        <Routes>
         <Route path='/' exact element={<Home/>}/>
         <Route path='/about' exact element={<About/>}/>
         <Route path='/courses' exact element={<CourseHome/>}/>
         <Route path='/team' exact element={<Team/>}/>
         <Route path='/pricing' exact element={<Price/>}/>
         <Route path='/journal' exact element={<Blog/>}/>
         <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};
export default App;
