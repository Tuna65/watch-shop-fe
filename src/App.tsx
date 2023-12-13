import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout/Layout";
import NaPoint from "./pages/napoint";
import { routerList } from "./utils";

function App() {
  return (
    <>
      <Routes>
        <Route path="/na-point" element={<NaPoint />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/dong-ho" />} />
          {routerList.map((r, index) => {
            return (
              <Route
                path={r.path}
                element={<r.component />}
                key={`router-${index}`}
              />
            );
          })}
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
