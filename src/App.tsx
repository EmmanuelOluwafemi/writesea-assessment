import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Networking } from "./pages/linkedin-analyzer";
import { AnalyzerWrapper } from "./pages/linkedin-analyzer/_components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/linkedin-analyzer" replace />} />
        <Route path="linkedin-analyzer" element={<AnalyzerWrapper />}>
          <Route
            index
            element={<Navigate to="/linkedin-analyzer/networking" replace />}
          />
          <Route path="networking" element={<Networking />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
