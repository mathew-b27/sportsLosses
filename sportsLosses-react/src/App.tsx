import SiteHeader from "./components/SiteHeader";
import FootballHeader from "./components/sports/football/FootballHeader";
import BaylorGame from "./components/sports/football/baylor_game";
import MilitaryBowl from "./components/sports/football/military_bowl";
import BasketballHeader from "./components/sports/basketball/BasketballHeader";
import RoundOneLosses from "./components/sports/basketball/RoundOneLossses";
import "./components/sitestyle.css";

function App() {
  return (
    <div>
      <SiteHeader />
      <FootballHeader />
      <BaylorGame />
      <MilitaryBowl />
      <BasketballHeader />
      <RoundOneLosses />
    </div>
  );
}

export default App;
