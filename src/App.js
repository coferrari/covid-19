import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="country/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
