import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Intro from "./pages/intro";
import ReviewCheck from "./pages/reviewCheck";
import Result from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/review-check" element={<ReviewCheck />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
