import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExchangeRateComponent from '../components/ExchangeRateComponent';
import Weather from '../components/WeatherComponent';
import './styles/App.css'
function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/exchange-rate">Exchange Rates</Link>
    //         </li>
    //         <li>
    //           <Link to="/weather">Weather</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       <Route path="/exchange-rate" element={<ExchangeRateComponent />} />
    //       <Route path="/weather" element={<Weather />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <h1>Welcome to My App</h1>
      <div className="container">
        <ExchangeRateComponent />
        <Weather />
      </div>
    </div>


  );
}

export default App;