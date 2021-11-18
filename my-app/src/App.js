
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Home() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Home Page</h2>
        <p>here is the home page for rwr </p>
      </div>
    );
  }
function About() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login Page</h2>
        <p>This is the login page</p>
      </div>
    );
  }
  function App() {
    return (
      <Router>
            <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
      Home
    </Link>
    <Link to="/about" style={{ padding: 5 }}>
      About
    </Link>
  </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }

  export default App;