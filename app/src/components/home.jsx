import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function Home() {
    return<>

    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px 0", textAlign: "center" }}>
        <a href="/" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Home</a>
        <a href="/exchange-rate" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Exchange Rates</a>
        <a href="/weather" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Weather</a>
        <a href="/MembersDetails" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Members Details</a>
        <a href="/symbol-counter" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Symbol Counter</a>
    </nav>
    <div style={{ margin: "20px", fontSize: "18px", color: "#4a4a4a" }}>
        <h1>General information of UK</h1>
        <p>The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country located off the northwestern coast of mainland Europe. The UK comprises four countries: England, Scotland, Wales, and Northern Ireland, with the capital city being London, one of the world's foremost financial centers.</p>
    <p>The UK has a storied history that spans several epochs, from ancient Roman times through the Middle Ages, the rise of the British Empire, and its role in both World Wars. Today, the UK is known for its influential culture, national and international politics, significant scientific contributions, and vibrant arts scene.</p>
    <p>Politically, the UK is a constitutional monarchy with a parliamentary system. It has a rich cultural heritage with notable contributions to music, literature, the arts, and philosophy. The UK remains a major player on the global stage, including being a permanent member of the United Nations Security Council.</p>    </div>
    
</>
  }