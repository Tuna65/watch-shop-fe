import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout/Layout";
import { routerList } from "./utils";

function App() {
  return (
    <>
      <Routes>
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
