import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navibar/>
      <Routes>
        <Route path='/' exact></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
