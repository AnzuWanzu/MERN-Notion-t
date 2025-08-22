import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div data-theme="forest" style={{ backgroundColor: "#0d0c0c" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
