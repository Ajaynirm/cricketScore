import React, { useState } from "react";
/*
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
      <footer className="foot">@ ajay_pratik</footer>
    </>
  );
};



*/


const CricketScore = () => {
  const [ball, setBall] = useState(0);
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
      } else {
        setBall((pre) => pre + 1);
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
      } else {
        setBall((prev) => prev + 1);
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
      <div className="main-container flex flex-col items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center container">
          <div className="main-title text-center mb-4">Cricket Score</div>
          <div className="display text-center mb-2">
            Batting Team: {battingTeamScore}/{wickets}
          </div>
          <div className="display text-center mb-2">
            Balls Bowled: {ballsBowled}
          </div>
          <div className="display text-center mb-2">
            Over: {over}.{ball}
          </div>
          <div className="display text-center mb-2">Extra: {extra}</div>
          <div className="display text-center mb-4">Target: {target}</div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button className="btn-size bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateScore(1)}>1 Run</button>
            <button className="btn-size bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateScore(2)}>2 Runs</button>
            <button className="btn-size bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateScore(3)}>3 Runs</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button className="btn-size bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateWicket()}>Wicket</button>
            <button className="btn-size bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateScore(6)}>6 Runs</button>
            <button className="btn-size bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateScore(4)}>4 Runs</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="btn-size bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateExtra()}>No Ball</button>
            <button className="btn-size bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateExtra()}>Wide Ball</button>
          </div>
        </div>
      </div>
      <footer className="foot text-center mt-4">@ ajay_pratik</footer>
    </>
  );
};
export default CricketScore;