import Hero from "./Component/hero"
import Nav from "./Component/nav"
import type { CardTypeProps } from "./Component/cardType";
import { Suspense } from "react";
import Card from "./Component/Main/card"
import Footer from "./Component/footer";
import { ToastContainer } from "react-toastify";

const cardPromis = async():Promise<CardTypeProps[]> => {
  const res = await fetch('./card.json');
  const data = await res.json();
  return data;
}

function App() {
  const CardPromis = cardPromis()
  return (
    <div className=" lg:max-w-7xl md:max-w-full container w-full  mx-auto ">
      
      <Nav></Nav>
       <Hero></Hero>
       <Suspense fallback={<li> Loding...</li>}>
      <Card CardPromis={CardPromis}></Card> 
       </Suspense>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  
  )
}

export default App
