import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Gallery from "./pages/Gallery";
import MainAppContainer from "./components/MainAppContainer";
import { Provider } from "./context/GalleryContext";

function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const handleOnClick = () => setIsSidebarOpened(!isSidebarOpened);

  return (
    <Provider>
      <BrowserRouter>
        <div className="flex h-screen">
          <Sidebar opened={isSidebarOpened} handleOnClick={handleOnClick} />
          <MainAppContainer>
            <Routes>
              <Route path="/" element={<Gallery />} />
            </Routes>
          </MainAppContainer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
