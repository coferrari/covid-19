import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/country/:country" element={<Details />} />
          <Route path="/:params" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
