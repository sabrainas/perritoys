import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrinquedoPage from '../pages/BrinquedoPage'
function App() {
  console.log("App renderizado");
  return (
    <Router>
      <Routes>
        <Route path="/brinquedos" element={<BrinquedoPage />} />
      </Routes>
    </Router>
  )
}

export default App
