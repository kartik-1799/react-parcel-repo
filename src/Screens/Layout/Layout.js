import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Headers from "../../Components/Headers/Headers";

const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
