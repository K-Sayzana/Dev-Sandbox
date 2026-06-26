import Header from "./components/header";
import CardGrid from "./components/cardGrid";
import { useState } from "react";
import "./asset/App.css"



export default function App(){

  const [score, setScore]=useState(0);
  const [bestScore, setBestScore]=useState(0);
  const [clickedCardIds, setClickedCardIds]=useState([]);


  const onCardClick=(id)=>{
    if (clickedCardIds.includes(id)){
      alert("Game Over");
      if (score > bestScore){
        setBestScore(score);
      }
      setScore(0);
      setClickedCardIds([]);
    }else{

      const newScore=score+1;
      setScore(newScore);
      if (newScore > bestScore){
        setBestScore(newScore);
      }
      setClickedCardIds([...clickedCardIds, id]);
    }
  };

  return <div className="app-container">
    <Header score={score} bestScore={bestScore}></Header>
    <CardGrid onCardClick={onCardClick}></CardGrid>
  </div>
}