import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar.jsx';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage.jsx';
import FHomePage from './components/pages/FHomePage';
import Login from './Login.jsx';
import Registr from './Registr.jsx';


function App() {
  return (
    <Router>
    <>
    <Navbar />
    
    <Switch>

    <Route path='/' exact>
      <FHomePage />
    </Route>

    <Route path='/Registr'>
      <Registr />
    </Route>

    <Route path='/Login'>
      <Login />
    </Route>

    <Route path='/HomePage'>
      <HomePage />
    </Route>

    <Route path='/About'>
      <About />
    </Route>

    <Route path='/Contact'>
      <Contact />
    </Route>

    </Switch>
    
    </>
    </Router>
    
  )
}

export default App
