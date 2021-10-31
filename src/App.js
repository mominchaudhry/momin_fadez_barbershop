
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/pages/HomePage/Home'
import Services from './Components/pages/Services/Services'
import About from './Components/pages/About/About'
import Footer from './Components/pages/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Switch>
        <Route path='/services' exact component={Services}/>
      </Switch>
      <Switch>
        <Route path='/book' exact component={About}/>
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
