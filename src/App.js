import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import OurPortfolio from "./Pages/OurPortfolio";
import Ourteam from "./Pages/Ourteam";
import Navber from "./Shared/Navber";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/our-portfolio"
          element={<OurPortfolio></OurPortfolio>}
        ></Route>
        <Route path="/our-team" element={<Ourteam></Ourteam>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
