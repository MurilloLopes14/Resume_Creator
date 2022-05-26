import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import { Document } from "./PAGES/DOCUMENT/Document";
import { NotFound } from "./PAGES/NOTFOUND404/NotFound";
import { Home } from "./PAGES/HOME/Home";

//COMPONENTS
import { NavBar } from "./COMPONENTS/NAVBAR/NavBar";
import { Description } from "./PAGES/DESCRIPTION/Description";
import { CreateDoc } from "./PAGES/CREATEDOC/CreateDoc";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Document />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/docs/:id" element={<Description />} />
          <Route path="/create" element={<CreateDoc />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
