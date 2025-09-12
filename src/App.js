import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import ReviewCheck from "./pages/reviewCheck";
import Result from "./pages/result";
import Record from "./pages/record";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/review-check" element={<ReviewCheck />} />
        <Route path="/result" element={<Result />} />
        <Route path="/record" element={<Record />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
