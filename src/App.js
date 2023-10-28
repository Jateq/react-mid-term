import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import About from './pages/about'
import PostZero from './pages/post0'
import Profile from './pages/profile';
import TwitterMainPage from './components/twitterPost';
import Footer from './components/footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<TwitterMainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/post0' element={<PostZero />} />


      </Routes>

    </div>
    <Footer/>

    </Router>
  );
}

export default App;
