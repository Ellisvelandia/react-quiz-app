import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Home } from "@mui/icons-material";
import mHome from "./Pages/Home/";

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png" }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
