import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Intro from "./pages/intro";
import ReviewCheck from "./pages/reviewCheck";
import Result from "./pages/result";
import Record from "./pages/record";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/review-check" element={<ReviewCheck />} />
        <Route path="/result" element={<Result />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
