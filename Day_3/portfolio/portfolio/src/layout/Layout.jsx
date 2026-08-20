import { Outlet } from "react-router";
import { NavBar } from "../Components";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default Layout;