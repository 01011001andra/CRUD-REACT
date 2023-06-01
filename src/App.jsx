import { redirect, Route, Routes } from "react-router-dom";
import { UpdateForm } from "./components";
import { Create, Dashboard } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/updateform/:id" element={<UpdateForm />} />
    </Routes>
  );
}

export default App;
