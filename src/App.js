import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Gallery from './gallery';
import NotFound from './notFound';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
