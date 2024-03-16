import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import SingleHotel from "./components/pages/SingleHotel/SingleHotel";
import SearchResults from "./components/pages/SearchResults/SearchResults";
const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>}/>
      <Route path="/hotels/:address" element={<SearchResults/>}/>
    </Routes>

  )
}

export default App;
