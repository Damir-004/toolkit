import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import ViewPost from "../ViewPost";
import Next from "../Next";

function RouteS() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Viewpost" element={<ViewPost />} />
          <Route exact path="/Next" element={<Next />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouteS;