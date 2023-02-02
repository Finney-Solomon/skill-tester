import { useSelector } from "react-redux";
import "./App.css";
import WelcomePage from "./Introduction/WelcomePage";
import Test from "./Test/Test";
function App() {
  const openTestPage = useSelector((state) => state?.questionPage);

  return (
    <div className="App">

      {openTestPage ? <Test /> : <WelcomePage />}
    </div>
  );
}

export default App;
