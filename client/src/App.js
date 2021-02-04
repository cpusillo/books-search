import React from "react"
import Search from "./pages/Search"
import { BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;
