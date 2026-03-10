import { Route, Routes } from "react-router";
import PageLayout from "./component/layout/page";
import { Coverage, Home } from "./page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/coverage" element={<Coverage />} />
      </Route>
    </Routes>
  )
}

export default App
