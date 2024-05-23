export default function MembersDetails() {

    return <> 
    
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px 0", textAlign: "center" }}>
    <a href="/" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Home</a>
    <a href="/exchange-rate" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Exchange Rates</a>
    <a href="/weather" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Weather</a>
    <a href="/MembersDetails" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>MembersDetails</a>
    <a href="/symbol-counter" style={{ margin: "10px", color: "#333", textDecoration: "none" }}>Symbol Counter</a>
  </nav>
  
   <iframe src={`${process.env.PUBLIC_URL}/hw1.html`}  title="Classifier" style={{ width: '100%', height: '100vh', border: 'none' }} 
    />;

</>
  }



