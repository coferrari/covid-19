import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Main/>
        <Routes>
          <Route path="/" component={Main}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
