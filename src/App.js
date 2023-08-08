import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import FirstComponent from "./Components/FirstComponent";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<FirstComponent />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
