
import './App.css';
import React, { useState } from 'react'

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/pages/HomePage/Home'
import Services from './Components/pages/Services/Services'
import About from './Components/pages/About/About'
import Footer from './Components/pages/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  const [click, setClick] = useState(false)
  return (
    <Router>
      <ScrollToTop />
      <Navbar click={click} setClick={setClick}/>
      <Switch>
        <Route path='/' exact render={() => <Home click={click}/>}/>
      </Switch>
      <Switch>
        <Route path='/services' exact render={() => <Services click={click}/>}/>
      </Switch>
      <Switch>
        <Route path='/book' exact render={() => <About click={click}/>}/>
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
