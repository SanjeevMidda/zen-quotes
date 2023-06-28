import './index.css';
import Quote from './components/Quote';
import { useEffect, useState } from 'react';

function App() {

  const [quotes, setQuotes] = useState("");
  const [number, setNumber] = useState(0);

  let colors =["green purple", "pink red", "blue grey", "orange brown"];
  
  let randomColor = () => {
    return `linear-gradient(${colors[Math.floor(Math.random()*colors.length)]})`
  }

  useEffect(() => {
    quote()
  },[])

  async function quote(){
    let request = await fetch("https://zenquotes.io/api/quotes/");
    let response = await request.json();

    setQuotes(response);
  }

  return (
    <div className="App">
      { quotes &&
        quotes.map((quote, index) => <Quote author={quote.a} quote={quote.q} background={randomColor()} key={index}/>)
      }

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>CLICK</button>
    </div>
  );
}

export default App;
