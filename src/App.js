import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" component={Main}>
          </Route>
        </Routes>
        Covid-19
      </BrowserRouter>
    </div>
  );
}

export default App;
