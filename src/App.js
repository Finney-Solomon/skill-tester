import { useSelector } from "react-redux";
import "./App.css";
import WelcomePage from "./Introduction/WelcomePage";
import Test from "./Test/Test";
function App() {
  /* -----------------------------------------------------------------------------------------
                         getting the questionPage state using useSelector                      
      -----------------------------------------------------------------------------------------*/
  const openTestPage = useSelector((state) => state?.questionPage);

  /* -----------------------------------------------------------------------------------------
               if openTestPage is True then it will open Test page else WelcomePage                        
      -----------------------------------------------------------------------------------------*/
  return <div className="App">{openTestPage ? <Test /> : <WelcomePage />}</div>;
}

export default App;
