import "./App.css";
import NotesApp from "./pages/NotesApp/NotesApp";
import Archieve from "./pages/Archieve/Archieve";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/react-notes-app" element={<Navigate to={"/notes"} />} />
        <Route exact path="/notes" element={<NotesApp />} />
        <Route exact path="/archieve" element={<Archieve />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
