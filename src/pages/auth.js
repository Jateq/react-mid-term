import logo from '../logo.svg';

function Auth() {
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
            You authorized successfully
          </a>
        </header>
      </div>
    );
  }
  
  export default Auth;
  