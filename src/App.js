import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      <Router>

       <Header/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
