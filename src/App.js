import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import ReviewCheck from "./pages/reviewCheck";
import Result from "./pages/result";
import ResultDetailed from "./pages/resultDetailed";
import Record from "./pages/record";
import Statics from "./pages/statics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/review-check" element={<ReviewCheck />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result-detailed" element={<ResultDetailed />} />
        <Route path="/record" element={<Record />} />
        <Route path="/statics" element={<Statics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
