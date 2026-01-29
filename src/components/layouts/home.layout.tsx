import { Outlet } from "react-router";
import HomeNavbar from "./home-navbar";

export default function HomeLayout() {
  return (
    <main>
      <HomeNavbar />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}
