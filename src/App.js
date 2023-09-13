import Header from './components/header/Header';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/moviedetails/MovieDetails';
import Favourite from './pages/favourite/Favourite';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
