import './App.css';
import Homepage from '../src/components/Homepage'
import Result from '../src/components/Result'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Results" element={<Result />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
