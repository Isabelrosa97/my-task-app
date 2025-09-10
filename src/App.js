import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Todos from "./pages/Todos";
import Contact from "./pages/Contact";
import { Navigate } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Navigate to="/todos" />} />
              <Route path="todos" element={<Todos />} />
              <Route path ="contact" element={<Contact />} />
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;