
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "./components/Header";
import Home from "./pages/Home";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
