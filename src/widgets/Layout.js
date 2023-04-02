import { Outlet } from "react-router-dom";

const Layout = () => (
  <main className="w-screen h-screen px-12 py-6 bg-primary text-white">
    <Outlet />
  </main>
);

export default Layout;
