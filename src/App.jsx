import { useState } from "react";
import Background from "./components/background";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="font-pwdisplay">
      <Background>
        <Cover trigger={setVisible}/>
        <div className={`${visible? 'animate-fadein' : ''}`}>
          <Navbar/>
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
        </div>
      </Background>
    </div>
  )
}

export default App
