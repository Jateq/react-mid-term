import Navbar from "../components/navbar";
import logo from '../logo.svg';

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            It is about page
          </a>
        </header>
      </div>
    );
  }
  
  export default About;
  