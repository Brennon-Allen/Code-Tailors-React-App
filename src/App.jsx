import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import WelcomeBox from "./components/WelcomeBox.jsx";
import ScrollText from './components/ScrollText.jsx';

function App() {

  return (
    <div className="flex-center-column">
      <Navbar />
      <WelcomeBox />
      <ScrollText />
    </div>
  );
}

export default App;
