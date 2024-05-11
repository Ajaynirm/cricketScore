import React, { useState } from "react";

const CricketScore = () => {
  const [ball,setBall] = useState(0);
  const [over, setOver] = useState(0);
  const [battingTeamScore, setBattingTeamScore] = useState(0);
  const [bowlingTeamScore, setBowlingTeamScore] = useState(0);
  const [ballsBowled, setBallsBowled] = useState(0);
  const [target, setTarget] = useState(1);
  const [wickets, setWickets] = useState(0);
  const [extra, setExtra] = useState(0);
  

  const updateScore = (runs) => {
    setBattingTeamScore((prev) => prev + runs);
    setTarget((target) => target + runs);
    setBallsBowled((bowl) => {
      const newBall = bowl + 1;
      if (newBall % 6 === 0) {
        setOver((ov) => ov + 1);
        setBall(0);
      }else{
        setBall((pre => pre+1));
      }
      return newBall;
    });
  };

  const updateWicket = () => {
    setWickets((wick) => wick + 1);
    setBallsBowled((bowl) => {
      const newBall = bowl + 1;
      if (newBall % 6 === 0) {
        setOver((ov) => ov + 1);
        setBall(0);
      }else{
        setBall(prev => prev+1);
      }
      return newBall;
    });
  };
  const updateExtra = () => {
    setBattingTeamScore((prev) => prev + 1);
    setExtra((ext) => ext + 1);
    setTarget((target) => target + 1);
  };

  return (
    <>
      <div className="main-container">
      <div class="flex flex-col container">
        <div class="basis-* main-title">Cricket Score</div>
        <div class="basis-* display">
          Batting Team: {battingTeamScore}/{wickets}
        </div>
        <div class="basis-* display">balls bowled : {ballsBowled}</div>
        <div class="basis-* display">Over: {over}.{ball}</div>
        <div class="basis-* display">Extra: {extra}</div>
        <div class="basis-* target">target: {target}</div>
        <div class="flex flex-row ...">
          <div class="flex ">
            <div class="flex-none w-32 ... btn">
              <button className="btn-size border" onClick={() => updateScore(1)}>1 Run</button>
            </div>
            <div class="flex-initial w-32 ... btn">
              <button className="btn-size border" onClick={() => updateScore(2)}>2 Runs</button>
            </div>
            <div class="flex-initial w-32 ... btn">
              <button className="btn-size border" onClick={() => updateScore(3)}>3 Runs</button>
            </div>
          </div>
        </div>
        <div class="flex btn ">
          <div class="flex-none w-32 ... btn">
            <button className="btn-size border" onClick={() => updateWicket()}>Wicket</button>
          </div>
          <div class="flex-initial w-32 ... btn">
            <button className="btn-size border" onClick={() => updateScore(6)}>6 Runs</button>
          </div>
          <div class="flex-initial w-32 ... btn">
            <button className="btn-size border" onClick={() => updateScore(4)}>4 Runs</button>
          </div>
        </div>
        <div class="flex ">
          <div class="flex-none w-32 ... btn">
            <button className="btn-size border" onClick={() => updateExtra(1)}>No Ball</button>
          </div>
          <div class="flex-initial w-32 ... btn">
            <button className="btn-size border" onClick={() => updateExtra(1)}>Wide Ball</button>
          </div>
        </div>
      </div>
      
      </div>
      <footer className="foot">@ ajay pratik</footer>
    </>
  );
};

export default CricketScore;
