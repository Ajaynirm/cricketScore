import React, { useState } from 'react';
import './cricket.css'; 

const CricketScore = () => {
  const [over,setOver]=useState(0);
  const [battingTeamScore, setBattingTeamScore] = useState(0);
  const [bowlingTeamScore, setBowlingTeamScore] = useState(0);
  const [ballsBowled, setBallsBowled] = useState(0);
  const [target,setTarget] = useState(1);
  const [wickets,setWickets] = useState(0);
  const [extra,setExtra]=useState(0);
  





  const updateScore = (runs) => {
    setBattingTeamScore(prev => prev+runs);
    setTarget(target => target+runs);
    setBallsBowled(bowl => {
      const newBall=bowl+1;
      if((newBall % 6) === 0){
        setOver(ov => ov+1);
      }
      return newBall;
    });
  
  };
  
  const updateWicket = () => {
    setWickets(wick => wick+1);
    setBallsBowled(bowl => {
      const newBall=bowl+1;
      if((newBall % 6) === 0){
        setOver(ov => ov+1);
      }
      return newBall;
    });
   
  }
  const updateExtra = () => {
    setBattingTeamScore(prev => prev+1);
    setExtra(ext => ext+1);
    setTarget(target => target+1);
  }
  
  

  return (
    <>
       <div className="cricket-score-container">
      <h1 className='title'>Cricket Score</h1>
      <div className="team-score">
        <h2 className='score'>Batting Team: {battingTeamScore}/{wickets}</h2>
        <h3 className='ball'>balls bowled : {ballsBowled}</h3>
        <h3 className='ball'>Over: {over}</h3>
        <h3 className='ball'>Extra: {extra}</h3>
        <h4 className='ball'>target: {target}</h4>
        <div className="button-group button-grid">
          <div className='child'>
          <button onClick={() => updateScore(1)}>1 Run</button>
          </div>
          <div className='child'>
          <button onClick={() => updateScore(2)}>2 Runs</button>
          </div>
          <div className='child'>
          <button onClick={() => updateScore(3)}>3 Runs</button>
          </div>
          <div className='child'>
          <button onClick={() => updateScore(4)}>4 Runs</button>
          </div>
          <div className='child'>
          <button onClick={() => updateScore(6)}>6 Runs</button>
          </div>
          <div className='child'>
          <button onClick={() => updateExtra(1)}>Wide Ball</button>
          </div>
          <div className='child'>
          <button onClick={() => updateExtra(1)}>No Ball</button>
          </div>
          <div className='child'>
          <button onClick={() => updateWicket()}>1 Wicket</button>
          </div>
        </div>
      </div>
      
    </div>
    </>
   
  );
};

export default CricketScore

