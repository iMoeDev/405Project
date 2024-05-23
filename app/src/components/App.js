import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ExchangeRateComponent from '../components/ExchangeRateComponent';
import Weather from '../components/WeatherComponent';
import MembersDetails from "../components/MembersDetails";
import SymbolCounter from "../components/SymbolCounter"
import Home from "../components/home"
import './styles/App.css'
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rate" element={<ExchangeRateComponent />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/MembersDetails" element={<MembersDetails />} />
            <Route path="/symbol-counter" element={<SymbolCounter />} />
        </Routes>
    </Router>
);
}

export default App;