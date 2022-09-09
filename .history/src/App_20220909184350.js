import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png" }}>
        <Header />

import { BrowserRouter, Route, Switch } from "react-router-dom";
        <>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
import { BrowserRouter, Route, Switch } from "react-router-dom";
        </>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
