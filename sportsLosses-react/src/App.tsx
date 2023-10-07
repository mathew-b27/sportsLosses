import FootballHeader from "./components/FootballHeader";
import BaylorGame from "./components/sportsgames/football/baylor_game";
import MilitaryBowl from "./components/sportsgames/football/military_bowl";
import BasketballHeader from "./components/andy";
import SiteHeader from "./components/SiteHeader";
import "./components/sitestyle.css";

function App() {
  return (
    <div>
      <SiteHeader />
      <FootballHeader />
      <BaylorGame />
      <MilitaryBowl />
      <BasketballHeader />
    </div>
  );
}

export default App;
