import './App.css';
import Homepage from '../src/components/Homepage'
import Result from '../src/components/Result'
import About from '../src/components/About'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Results" element={<Result />} />
        <Route path="/About" element={<About />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
