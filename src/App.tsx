import Hero from './components/Hero';
import About from './components/About';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
