import SiteHeader from "./components/SiteHeader";
import FootballHeader from "./components/sports/football/FootballHeader";
import BaylorGame from "./components/sports/football/baylor_game";
import KansasGame from "./components/sports/football/kansas_game";
import MilitaryBowl from "./components/sports/football/military_bowl";
import BasketballHeader from "./components/sports/basketball/BasketballHeader";
import RoundOneLosses from "./components/sports/basketball/RoundOneLossses";
import "./components/sitestyle.css";
import RoundTwoLosses from "./components/sports/basketball/RoundTwoLosses";
import SoccerHeader from "./components/sports/soccer/SoccerHeader";
import SoccerRoundOneLosses from "./components/sports/soccer/soccerRoundOneLosses";
import SoccerRoundTwoLosses from "./components/sports/soccer/soccerRoundTwoLosses";
import SoccerRoundThreeLosses from "./components/sports/soccer/soccerRoundThreeLosses";

function App() {
  return (
    <div>
      <h2>
        <SiteHeader />
      </h2>

      {/*Embed for the youtube video*/}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eV10_w1Oy1E?si=hDSJdSRxebsgFcCy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/*Text Sections with Scores*/}
      <FootballHeader />
      <BaylorGame />
      <MilitaryBowl />
      <KansasGame />
      <BasketballHeader />
      <RoundOneLosses />
      <RoundTwoLosses />
      <SoccerHeader />
      <SoccerRoundOneLosses />
      <SoccerRoundTwoLosses />
      <SoccerRoundThreeLosses />
    </div>
  );
}

export default App;
