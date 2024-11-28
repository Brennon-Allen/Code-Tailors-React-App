import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import WelcomeBox from "./components/WelcomeBox.jsx";
import ScrollText from './components/ScrollText.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <WelcomeBox />
      <ScrollText 
      text="About Code Tailors"
      />
    </div>
  );
}

export default App;
