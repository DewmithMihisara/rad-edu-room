import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './view/pages/Home/Home';
import { About } from './view/pages/About/About';
import { Contact } from './view/pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
