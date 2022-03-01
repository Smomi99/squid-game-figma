
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SwitchNetwork from './components/SwicthNetwork/SwitchNetwork';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Leaderboards from './components/Leaderboards/Leaderboards';
import Binance from './components/Binance/Binance';
import ApproveTransaction from './components/ApproveTransaction/ApproveTransaction';
import TransactionFailed from './components/TransactionFailed/TransactionFailed';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/incorrectnetwork" element={<SwitchNetwork />}>

        </Route>
        <Route path="/leaderboard" element={<LeaderBoard />}>

        </Route>
        <Route path="/leaderboard/leaderboards" element={<Leaderboards />}>

        </Route>
        <Route path="/binance" element={<Binance />}>

        </Route>
        <Route path="/transaction" element={<ApproveTransaction />}>

        </Route>
        <Route path="/failed" element={<TransactionFailed />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
