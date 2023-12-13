import React from "react";
import { Outlet } from "react-router";
interface Props {}

const ProtectedRoute = (props: Props) => {
  const {} = props;
  React.useEffect(() => {}, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
