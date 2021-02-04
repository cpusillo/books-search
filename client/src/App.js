import React from "react"
import Search from "./pages/Search"
import Navigation from "./components/Navigation/Navigation"
import { BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Navigation />
      <div>
      <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;
