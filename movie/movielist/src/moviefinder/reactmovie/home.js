import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Search from "./search";
function Home(){
    return(<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>)
}
export default Home;
// https://www.geeksforgeeks.org/reactjs-router/