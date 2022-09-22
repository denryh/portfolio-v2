import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero';
import About from './components/About';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/main' element={<Main />} />
        <Route path='/work' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
