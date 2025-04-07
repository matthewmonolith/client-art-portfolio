import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Gallery from "./pages/Gallery";

function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const handleOnClick = () => setIsSidebarOpened(!isSidebarOpened);

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar opened={isSidebarOpened} handleOnClick={handleOnClick} />
        <main className="flex-1 m-3 overflow-auto">
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
