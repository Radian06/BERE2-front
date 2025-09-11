import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Intro from "./pages/intro";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
