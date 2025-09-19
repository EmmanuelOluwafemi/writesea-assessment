import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Networking } from "./pages/linkedin-analyzer";
import { AnalyzerWrapper } from "./pages/linkedin-analyzer/_components/layout";
import { NotFound } from "./components/shared/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/linkedin-analyzer" replace />} />

        {/* LinkedIn Analyzer Routes */}
        <Route path="linkedin-analyzer" element={<AnalyzerWrapper />}>
          <Route
            index
            element={<Navigate to="/linkedin-analyzer/networking" replace />}
          />
          <Route path="networking" element={<Networking />} />

          {/* Scoped 404 inside linkedin-analyzer */}
          <Route path="*" element={<NotFound scope="linkedin" />} />
        </Route>

        {/* Scoped 404 for all other routes under layout */}
        <Route path="*" element={<NotFound scope="layout" />} />
      </Route>
    </Routes>
  );
}

export default App;