
import React, { useState, useEffect } from 'react';
import "./styles/exchangeRate.css"





function ExchangeRate() {
    const [rate, setRate] = useState(null);
    const [amountSAR, setAmountSAR] = useState('');
    const [convertedUSD, setConvertedUSD] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const apiKey = '19a894d2c58f5847eef8d10c'; 
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/SAR/USD`;
  
      const fetchExchangeRate = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.result === 'success') {
            setRate(data.conversion_rate);
          } 
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchExchangeRate();
    }, []);
  
    const handleAmountChange = (e) => {
      setAmountSAR(e.target.value);
      if (rate) {
        setConvertedUSD((e.target.value * rate).toFixed(2)); 
      }
    };
  
    return <>
      <nav style={{ backgroundColor: "#f0f0f0", padding: "10px 0", textAlign: "center" }}>
      <a href="/" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Home</a>
      <a href="/exchange-rate" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Exchange Rates</a>
      <a href="/weather" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Weather</a>
      <a href="/MembersDetails" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Members Details</a>
      <a href="/symbol-counter" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Symbol Counter</a>
  </nav>
      <div className="SARToUSDExchangeRate">

        <h1>Convert SAR to USD</h1>
        {error ? <p>Error: {error}</p> :
          <div>
            <input 
              type="number" 
              value={amountSAR} 
              onChange={handleAmountChange} 
              placeholder="Enter amount in SAR" 
            />
            <p>Exchange Rate: 1 SAR = {rate} USD</p>
            <p>{amountSAR} SAR is approximately {convertedUSD} USD</p>
          </div>
        }
      </div>
      </>
  }
  
  export default ExchangeRate;