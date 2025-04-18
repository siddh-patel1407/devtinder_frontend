import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./body";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/LOgin" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
