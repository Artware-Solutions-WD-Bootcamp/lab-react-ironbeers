import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BeerList from "./pages/BeerList";
import BeerDetails from "./pages/BeerDetails";
import BeerNew from "./pages/BeerNew";
import BeerRandom from "./pages/BeerRandom";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beer-details/:id" element={<BeerDetails />} />
        <Route path="/beer-new" element={<BeerNew />} />
        <Route path="/beer-random" element={<BeerRandom />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
