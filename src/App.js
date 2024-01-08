import './App.css';
import { BrowserRouter as Router,  Route,redirect, Routes } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import ScrollToTop from './Pages/ScrollToTop';
import OurStory from './Pages/OurStory';
import Blog from './Pages/Blog';
import News from './Pages/News';
import Eng from './components/Eng';
import Leen from './components/Leen';
import NewsArticle from './components/NewsArticle';
import InnovationHubs from './Pages/InnovationHubs';
import HireUs from './Pages/HireUs'
import Donate from './Pages/Donate';
function App() {
    return (
      <Router>
    <Header /> 
    
          <Routes>
            <Route element={<Home/> } exact path="/Home" />
            <Route  element={ <OurStory/> } exact path="/OurStory" />
            <Route element={ <InnovationHubs/> } exact path="/InnovationHubs" />
            <Route element={ <HireUs/> } exact path="/HireUs" />
            <Route element={<Donate/> }  exact path="/Donate" />
            <Route element={<Blog/>} path='/Blog' />
            <Route element={<News/>} path='/News' />
            <Route element={<Eng/>} path='/Home' />
            <Route element={<Leen/>} path='/Home' />
            <Route element={<NewsArticle/>} path='/article/:title' />

          </Routes>
         
<Footer />  
        <ScrollToTop/>
        </Router>
    );
  }
  
  export default App;
  