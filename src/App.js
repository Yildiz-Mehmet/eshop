import "./App.css";
import Checkout from "./Checkout";

import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Header />
    </div>
  );
}

export default App;
