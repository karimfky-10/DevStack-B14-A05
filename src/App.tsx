import Hero from "./Component/hero"
import { Card } from "./Component/Main/card"
import Nav from "./Component/nav"
import type { CardTypeProps } from "./Component/cardType";
import { Suspense } from "react";

const cardPromis = async():Promise<CardTypeProps[]> => {
  const res = await fetch('./card.json');
  const data = await res.json();
  return data;
}

function App() {
  const CardPromis = cardPromis()
  return (
    <div className=" max-w-[1425] container w-3/4 mx-auto">
      
      <Nav></Nav>
       <Hero></Hero>
       <Suspense fallback={<li> Loding...</li>}>
      <Card CardPromis={CardPromis}></Card> 
       </Suspense>
        
    </div>
  
  )
}

export default App
