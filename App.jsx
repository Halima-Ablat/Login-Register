import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
