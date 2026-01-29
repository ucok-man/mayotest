import { Outlet } from "react-router";
import HomeNavbar from "./home-navbar";
import { Footer } from "./home.footer";

export default function HomeLayout() {
  return (
    <main>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </main>
  );
}
