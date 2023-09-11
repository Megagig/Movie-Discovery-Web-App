import Header from './components/header/Header';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/moviedetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
