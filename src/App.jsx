import { useState } from 'react'
import './index.css'
import quotes from "./quotes.json";
import QuoteBox from"./componente/QuoteBox.jsx"


function App() {

  console.log(quotes);
    
  return (
      

       <QuoteBox quotes={quotes} useState={useState} />
                       
  );
}
 export default App;