import React from "react";
import BoxElement from "./BoxElement";
import {useState, useEffect} from "react";

function App(props) {

  const initialState=["","","","","","","","",""];

  const [gameState, setGameSate]=useState(initialState);
  const [isXturn, setTurn]=useState(false);
  const [isFinished,setIsFinished]=useState(false);


  function returnWinnerUser(){
     const winningPos=[[0,1,2], [0,3,6],[6,7,8],[2,5,8],[0,4,8],[2,4,6],[3,4,5],[1,4,7]];
        for(var i=0;i<winningPos.length;i++){
          const arr=winningPos[i];
          if(gameState[arr[0]]!=="" && gameState[arr[1]]!=="" && gameState[arr[0]]===gameState[arr[1]] && gameState[arr[1]]===gameState[arr[2]]){
            var playerWon=isXturn? "X":"0";
            return playerWon;
          }
    }
    return null;
  }

  function calConclusion(){
    const playerWon=returnWinnerUser();
      if(playerWon){
          alert(playerWon+" has won");
          setIsFinished(true);
      }
  }

  function updatePlayerState(index){
      let strings=Array.from(gameState);
      if(gameState[index]==="" && !isFinished){
         strings[index]=isXturn ? "0": "X";
        setGameSate(strings);
        setTurn(!isXturn);
        calConclusion();
        console.log(gameState);
      }
     
  }


  return (
   <div className="container">

   <h1>React Tic Tac Toe App</h1>
   <div>
    <div className="row">
      <BoxElement state={gameState[0]} onClick={()=> updatePlayerState(0)}   />
      <BoxElement state={gameState[1]} onClick={()=> updatePlayerState(1)} />
      <BoxElement state={gameState[2]} onClick={()=> updatePlayerState(2)} />
   </div>

    <div className="row">
      <BoxElement state={gameState[3]}  onClick={()=> updatePlayerState(3)}/>
      <BoxElement state={gameState[4]}  onClick={()=> updatePlayerState(4)}/>
      <BoxElement state={gameState[5]}  onClick={()=> updatePlayerState(5)}/>
   </div>

    <div className="row">
      <BoxElement state={gameState[6]}  onClick={()=> updatePlayerState(6)}/>
      <BoxElement state={gameState[7]} onClick={()=> updatePlayerState(7)}/>
      <BoxElement state={gameState[8]} onClick={()=> updatePlayerState(8)}/>
   </div>
    </div>
  
  <button onClick={()=>{
    setGameSate(initialState);
    setIsFinished(false);
  }}>Clear Game12</button>
     
   </div>
  );
}

export default App;
