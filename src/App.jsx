import { useState } from 'react'
import './index.css'
import quotes from "./quotes.json";


function App() {
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeUser = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  const color = colors[randomIndex];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="card">
        <h1>
        <i class="fa-solid fa-quote-right"></i> {quotes[index].quote} {" "}
          <li>
          {quotes[index].author}
          </li>
        </h1>
        <div className ="button">
            
                
            <button onClick={changeUser} style={{ color: colors[randomColorIndex] }}>Click </button>
            
             </div>
      
        
        
        
      </div>
    </div>
  );
}
 